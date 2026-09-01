import nodemailer from 'nodemailer';

// Este endpoint vive en un proyecto Vercel aparte del sitio (que se sigue
// publicando como estático en GitHub Pages, en su dominio propio). Por eso
// necesita cabeceras CORS: el fetch() del formulario llega desde un origen
// distinto al de este despliegue. Si el dominio del sitio cambia, actualiza
// ALLOWED_ORIGIN.
const ALLOWED_ORIGIN = 'https://www.reparaciondepiladoraslaser.com.es';

const clean = (value, max = 2500) =>
  String(value ?? '')
    .replace(/[<>]/g, '')
    .trim()
    .slice(0, max);

let cachedTransporter = null;
function getTransporter() {
  if (cachedTransporter) return cachedTransporter;
  const port = Number(process.env.SMTP_PORT || 465);
  cachedTransporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: String(process.env.SMTP_SECURE ?? (port === 465 ? 'true' : 'false')) === 'true',
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 20000,
  });
  return cachedTransporter;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Vary', 'Origin');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method === 'GET') {
    const required = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS'];
    return res.status(200).json({
      ok: true,
      service: 'DepilFix contacto API',
      environment: Object.fromEntries(required.map((key) => [key, Boolean(process.env[key])])),
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, code: 'METHOD_NOT_ALLOWED' });
  }

  try {
    const required = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS'];
    const missing = required.filter((key) => !process.env[key]);
    if (missing.length) {
      return res.status(500).json({ ok: false, code: 'MISSING_SMTP_ENV', missing });
    }

    const data = req.body || {};
    if (data.website) return res.status(200).json({ ok: true }); // honeypot

    const nombre = clean(data.nombre, 120);
    const telefono = clean(data.telefono, 40);
    const email = clean(data.email, 140);
    const equipo = clean(data.equipo, 150);
    const mensaje = clean(data.mensaje, 2500);

    if (!nombre || !telefono || !email || !mensaje) {
      return res.status(400).json({ ok: false, code: 'INVALID_FORM_DATA' });
    }

    const subject = 'Nueva consulta DepilFix';
    const html = `
      <h2>Nueva consulta DepilFix</h2>
      <p><b>Nombre:</b> ${nombre}</p>
      <p><b>Teléfono:</b> ${telefono}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Depiladora:</b> ${equipo || 'No indicada'}</p>
      <p><b>Qué ha pasado:</b><br>${mensaje.replace(/\n/g, '<br>')}</p>
    `;

    const transporter = getTransporter();
    await transporter.verify();
    await transporter.sendMail({
      from: `"DepilFix" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject,
      text: `Nueva consulta DepilFix\n\nNombre: ${nombre}\nTeléfono: ${telefono}\nEmail: ${email}\nDepiladora: ${equipo || 'No indicada'}\n\nQué ha pasado:\n${mensaje}`,
      html,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('DepilFix SMTP error:', error);
    return res.status(500).json({ ok: false, code: 'SMTP_SEND_FAILED' });
  }
}

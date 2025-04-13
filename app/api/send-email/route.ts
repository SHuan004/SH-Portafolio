import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Campos incompletos" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Formulario de Contacto" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: subject || "📩 Nuevo mensaje desde tu portafolio",
      html: `
      <div style="font-family: 'Segoe UI', sans-serif; background-color: #f9f9f9; padding: 30px;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); padding: 30px;">
          <h2 style="color: #222; border-bottom: 1px solid #eee; padding-bottom: 10px;">
            📩 Nuevo mensaje desde tu portafolio
          </h2>
          <table style="width: 100%; margin-top: 20px; font-size: 16px; color: #333;">
            <tr>
              <td style="padding: 8px 0;"><strong>Nombre:</strong></td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Email:</strong></td>
              <td style="padding: 8px 0;">${email}</td>
            </tr>
            ${
              subject
                ? `<tr>
                     <td style="padding: 8px 0;"><strong>Asunto:</strong></td>
                     <td style="padding: 8px 0;">${subject}</td>
                   </tr>`
                : ""
            }
            <tr>
              <td style="padding: 8px 0; vertical-align: top;"><strong>Mensaje:</strong></td>
              <td style="padding: 8px 0; white-space: pre-wrap; line-height: 1.6;">
                ${message}
              </td>
            </tr>
          </table>
    
          <p style="margin-top: 30px; font-size: 14px; color: #777;">
            Este mensaje fue enviado desde el formulario de contacto de tu portafolio personal.
          </p>
        </div>
      </div>
    `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error al enviar correo:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

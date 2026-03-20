import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "");

export async function POST(request: NextRequest) {
  const RESEND_KEY = process.env.RESEND_API_KEY;

  if (!RESEND_KEY) {
    return NextResponse.json(
      { error: "Server misconfiguration: missing API KEY" },
      { status: 500 },
    );
  }

  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const fromEmail = process.env.EMAIL_FROM || "hello@loureiroyuri.com";
    const toEmail = process.env.EMAIL_TO || "hello@loureiroyuri.com";

    await resend.emails.send({
      from: `Portfolio <${fromEmail}>`,
      to: [toEmail],
      subject: `Novo contato: ${name}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.5;">
          <h2>Novo contato via Portfolio</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${phone || "Não informado"}</p>
          <p><strong>Serviço:</strong> ${service || "Não informado"}</p>
          <hr />
          <p><strong>Mensagem:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error: any) {
    console.error("Erro na API de contato:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

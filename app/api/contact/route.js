// app/api/contact/route.js
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, referral, subject, message } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Intentional Wellness Website" <${process.env.SMTP_USER}>`,
      to: "janelle@intentionalwellness.care",
      replyTo: email,
      subject: subject || "New contact form submission",
      text: `
            New contact form submission from IntentionalWellness.care

            Name: ${name || "-"}
            Email: ${email || "-"}
            Phone: ${phone || "-"}
            How they heard about you: ${referral || "-"}

            Message:
            ${message || "-"}
                `.trim(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Email failed to send" },
      { status: 500 }
    );
  }
}

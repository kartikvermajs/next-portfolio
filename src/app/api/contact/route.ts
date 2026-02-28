import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import * as z from "zod";

const formSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    message: z.string().min(10),
});

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, message } = formSchema.parse(body);

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST || "smtp.office365.com",
            port: Number(process.env.EMAIL_PORT) || 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "kartikverma88273@outlook.com",
            replyTo: email,
            subject: `Portfolio Contact from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        };

        // Note: If no EMAIL_USER/PASS is provided, we simulate success for demo purposes
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.log("Mock Email Sent:", mailOptions);
            return NextResponse.json({ message: "Mock email sent successfully." }, { status: 200 });
        }

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
        console.error("Contact Form API Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}

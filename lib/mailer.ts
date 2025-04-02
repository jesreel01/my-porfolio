import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendMail = async (name: string, userEmail: string, message: string) => {
  try {
    const info = await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECIPIENT,
      subject: `${name}`,
      text: `Name: ${name}\nEmail: ${userEmail}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${userEmail}</p>
               <p><strong>Message:</strong> ${message}</p>`,
      replyTo: userEmail,
    });

    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

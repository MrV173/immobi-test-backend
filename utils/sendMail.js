import nodemailer from "nodemailer";
import "dotenv/config";

const sendEmail = async (userData) => {
  const transporter = nodemailer.createTransport({
    service: process.env.MAIL_SERVICE,
    auth: {
      user: process.env.MAIL_ENGINE,
      pass: process.env.MAIL_PASS,
    },
  });

  const id = userData.id;
  const verificationUrl = process.env.BASE_URL;
  const verify = `${verificationUrl}/${id}`;

  const mailOptions = {
    from: "noreply",
    to: process.env.MAIL_ADMIN,
    subject: "New User Registration",
    html: `
      <p>A new user has registered:</p>
      <p>Click link below to verify:</p>
      <a href="${verify}">Approval</a>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent to admin:", info.response);
  } catch (error) {
    console.error("Error sending email to admin:", error);
  }
};

export default sendEmail;

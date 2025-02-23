const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, text) => {
    console.log("pwd",process.env.GMAIL_PWD)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "m.nimkar070@gmail.com",
      pass: process.env.GMAIL_PWD,
    },
  });

  const mailOptions = {
    from: "m.nimkar070@gmail.com",
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (err) {
    console.error("Error sending email:", err.message);
  }
};

module.exports = sendEmail;
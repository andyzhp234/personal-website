import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const sendEmail = async (req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_APP_PSWD,
    },
  });

  if (!req.body.name || !req.body.email || !req.body.message) {
    res.status(400).json({ message: "Invalid" });
    return;
  }

  try {
    // send mail with defined transport object
    await transporter.sendMail({
      from: process.env.EMAIL, // sender address
      to: process.env.EMAIL, // list of receivers
      subject: "Message From Personal Website", // Subject line
      text: `Message from ${req.body.name}`, // plain text body
      html: `
        <div><b>My Name is</b>: ${req.body.name} </div>
        <div><b>My Email is</b>: ${req.body.email} </div>
        <div>
          <b>My Message is</b>:
          <br/>
          ${req.body.message}
        </div>
      `, // html body
    });

    res.status(200).json({ message: "success" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "error when sending mail" });
  }
};

export default sendEmail;

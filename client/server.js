const express = require('express');
const path = require('path');
const cors = require("cors")
const nodemailer = require("nodemailer");
require('dotenv').config()

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded ( {extended : true} ) )

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,              // use 587 instead of 465
//   secure: true,          // use STARTTLS, not SSL
//   auth: {
//     user: "lasricdev@gmail.com",     // your Gmail
//     pass: "jbwpygvscaawlgqp",        // 16-char App Password (no spaces!)
//   },
// });

// app.post('/api/mail', async (req, res) => {
//   console.log("hello");
//   try {
//     const info = await transporter.sendMail({
//       from: "Lasric Register <lasricdev@gmail.com>",
//       to: "set@davtonlearn.com",
//       subject: "Verify email on LASRIC",
//       html: "Setonji How are you doing?"
//     });

//     console.log("✅ Message sent:", info);
//     res.json({ success: true, messageId: info });
//   } catch (err) {
//     console.error("❌ Error sending email:", err);
//     res.status(500).json({ error: err.message });
//   }
// });


app.listen(9000, () => {
  console.log("app running on port 9000");
});
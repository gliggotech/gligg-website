// import nodemailer from 'nodemailer';
// const createTransporter = () => {
//     return nodemailer.createTransport({
//       host: 'smtp-mail.outlook.com',
//       port: 587,
//       secure: false, // TLS
//       auth: {
//         user: process.env.EMAIL_USER, // Your Outlook email
//         pass: process.env.EMAIL_PASS  // Your email password or app password
//       },
//       // tls: {
//       //   ciphers: 'SSLv3',
//       //   rejectUnauthorized: false
//       // }
//     });
//   };

import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // TLS
  auth: {
    user: process.env.EMAIL_USER, // Your Outlook email
    pass: process.env.EMAIL_PASS, // Your email password or app password
  },
  // tls: {
  //   ciphers: 'SSLv3',
  //   rejectUnauthorized: false
  // }
});

export default transporter;

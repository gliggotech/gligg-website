"use server";

import ContactFormEmail from "@/components/email templates/ContactFormEmail";
import transporter from "@/utils/transporter";
import { render } from "@react-email/components";

export async function contactFunction(data) {
  const { first_name, last_name, email, message } = data;

  const emailHtml = await render(
    ContactFormEmail({
      first_name: first_name,
      last_name: last_name,
      email: email,
      message: message,
    })
  );

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: `New Contact Form Submission from ${first_name} ${last_name}`,
    html: emailHtml,
  };

  try {
    // Use sendMail as a Promise
    const info = await transporter.sendMail(mailOptions);
    if (!info) {
      throw new Error(
        "An error occurred. Sorry for the inconvenience. Please try again."
      ); 
    }

    return {
      success: true,
      message:
        "Thank you for contacting Gliggo Inc. You are important to us. A member of our team will get back to you shortly.",
    };
  } catch (error) {
    return {
      success: false,
      message:
        "An error occurred. Sorry for the inconvenience. Please try again.",
    };
  }
}

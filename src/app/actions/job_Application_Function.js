"use server";

import { render } from "@react-email/render";
import transporter from "@/utils/transporter";
import JobApplicationEmail from "@/components/email templates/JobApplicationEmail";

export async function job_apply(formData) {
  // Create transporter

  // Extract form fields
  const first_name = formData.get("first_name");
  const last_name = formData.get("last_name");
  const email = formData.get("email");
  const university = formData.get("university");
  const expertise = formData.get("expertise");
  const githubLink = formData.get("githublink");
  const linkedinLink = formData.get("linkedinlink");
  const resume = formData.get("resume");

  // Render email HTML
  const emailHtml = await render(
    JobApplicationEmail({
      first_name,
      last_name,
      email,
      university,
      expertise,
      githubLink,
      linkedinLink,
      resumeFileName: resume.name,
    })
  );

  // Prepare mail options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: `Job Application - ${first_name} ${last_name}`,
    html: emailHtml,
    attachments: [],
  };

  // Handle resume attachment
  if (resume && resume.size > 0) {
    mailOptions.attachments.push({
      filename: resume.name,
      content: Buffer.from(await resume.arrayBuffer()),
      contentType: resume.type,
    });
  }

  try {
    // Send email
    await transporter.sendMail(mailOptions);

    return {
      success: true,
      message: "Application submitted successfully",
    };
  } catch (error) {
    console.error("Email sending error:", error);
    return {
      success: false,
      message: "Failed to submit application",
    };
  }
}

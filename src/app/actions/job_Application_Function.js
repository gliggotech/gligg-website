"use server";

import { render } from "@react-email/render";

import JobApplicationEmail from "@/components/email templates/JobApplicationEmail";
import { gettingAccessToken } from "@/utils/token_generation";
import { mailsendfunction } from "@/utils/mailsendfunction";

export async function job_apply(formData) {
  try {
    // Extract form data
    const first_name = formData.get("first_name");
    const last_name = formData.get("last_name");
    const email = formData.get("email");
    const university = formData.get("university");
    const expertise = formData.get("expertise");
    const githubLink = formData.get("githublink");
    const linkedinLink = formData.get("linkedinlink");
    const resume = formData.get("resume");

    // Validate required fields
    if (!first_name || !last_name || !email || !resume) {
      return {
        success: false,
        message: "Missing required fields",
      };
    }

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

    // Get access token
    const tokenResponse = await gettingAccessToken({
      ClientId: process.env.CLIENT_ID,
      ClientSecret: process.env.CLIENT_SECRET,
      TenantID: process.env.TENANT_ID,
    });

    // Check token acquisition
    if (
      !tokenResponse ||
      !tokenResponse.message ||
      !tokenResponse.message.access_token
    ) {
      return {
        success: false,
        message: "Failed to obtain access token",
      };
    }

    const accessToken = tokenResponse.message.access_token;

    // Prepare email payload for Microsoft Graph API
    const emailPayload = {
      message: {
        subject: "New Job Application Submission",
        body: {
          contentType: "HTML",
          content: emailHtml,
        },
        toRecipients: [
          {
            emailAddress: {
              address: process.env.ADMIN_EMAIL,
            },
          },
        ],
        attachments: [
          {
            "@odata.type": "#microsoft.graph.fileAttachment",
            name: resume.name,
            contentType: resume.type,
            contentBytes: await resume
              .arrayBuffer()
              .then((buffer) => Buffer.from(buffer).toString("base64")),
          },
        ],
      },
      saveToSentItems: false,
    };

    // Send email via Microsoft Graph API
    const graphResponse = await mailsendfunction(emailPayload, accessToken);
    if (graphResponse.status === 200) {
      return {
        success: true,
        message: "Application submitted successfully",
      };
    } else {
      return {
        success: false,
        message: graphResponse.message,
      };
    }
  } catch (error) {
    console.error("Job application submission error:", error);
    return {
      success: false,
      message: error.message || "Failed to submit application",
    };
  }
}

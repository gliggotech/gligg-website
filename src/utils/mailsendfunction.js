export async function mailsendfunction(emailPayload, accessToken) {
  try {
    // 6. Send email via Microsoft Graph API
    const emailResponse = await fetch(
      `https://graph.microsoft.com/v1.0/users/${process.env.SENDER_EMAIL}/sendMail`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailPayload),
      }
    );

    // 7. Handle email sending response
    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      throw new Error(`Failed to send email: ${errorText}`);
    }
    return {
      status: 200,
      message: "Email sent successfully",
    };
  } catch (error) {
    return {
      status: 500,
      message: `Error sending email: ${error.message}`,
    };
  }
}

import {
  Body,
  Container,
  Head,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Row,
  Column,
} from "@react-email/components";
import * as React from "react";

export const JobApplicationEmail = ({
  first_name,
  last_name,
  email,
  university,
  expertise,
  githubLink,
  linkedinLink,
  resumeFileName,
}) => (
  <Html>
    <Head />
    <Preview>
      New Job Application from {first_name} {last_name}
    </Preview>

    <Body style={main}>
      <Container style={container}>
        <Section style={headerSection}>
          <Text style={title}>New Job Application Received</Text>
        </Section>

        <Section style={contentSection}>
          <Row>
            <Column>
              <Text style={sectionTitle}>Applicant Details</Text>
              <Text style={text}>
                <strong>Name:</strong> {first_name} {last_name}
              </Text>
              <Text style={text}>
                <strong>Email:</strong> {email}
              </Text>
              <Text style={text}>
                <strong>University:</strong> {university}
              </Text>
            </Column>
          </Row>

          <Row style={expertiseSection}>
            <Column>
              <Text style={sectionTitle}>Professional Expertise</Text>
              <Text style={text}>{expertise}</Text>
            </Column>
          </Row>

          {(githubLink || linkedinLink) && (
            <Row style={linksSection}>
              <Column>
                <Text style={sectionTitle}>Professional Profiles</Text>
                {githubLink && (
                  <Text style={text}>
                    <Link href={githubLink}>GitHub Profile</Link>
                  </Text>
                )}
                {linkedinLink && (
                  <Text style={text}>
                    <Link href={linkedinLink}>LinkedIn Profile</Link>
                  </Text>
                )}
              </Column>
            </Row>
          )}
        </Section>

        {/* <Section style={attachmentSection}>
            <Text style={sectionTitle}>Attached Resume</Text>
            <Text style={text}>
              Filename: {resumeFileName}
            </Text>
            <a 
              href={`${baseUrl}/view-resume/${resumeFileName}`} 
              style={button}
            >
              View Resume
            </a>
          </Section> */}

        <Text style={footer}>
          Application received on {new Date().toLocaleDateString()}
        </Text>
      </Container>
    </Body>
  </Html>
);

export default JobApplicationEmail;

// Styles
const main = {
  backgroundColor: "#f4f4f4",
  fontFamily:
    "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px",
  maxWidth: "600px",
  border: "1px solid #e0e0e0",
  borderRadius: "8px",
};

const headerSection = {
  textAlign: "center",
  padding: "20px",
  backgroundColor: "#f0f0f0",
};

const title = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#333",
  margin: "10px 0",
};

const contentSection = {
  padding: "20px",
  borderBottom: "1px solid #e0e0e0",
};

const sectionTitle = {
  fontSize: "18px",
  fontWeight: "bold",
  color: "#333",
  marginBottom: "10px",
  borderBottom: "2px solid #28a745",
  paddingBottom: "5px",
};

const text = {
  fontSize: "16px",
  color: "#333",
  margin: "5px 0",
};

const expertiseSection = {
  marginTop: "15px",
  padding: "10px",
  backgroundColor: "#f9f9f9",
};

const linksSection = {
  marginTop: "15px",
  padding: "10px",
  backgroundColor: "#f0f0f0",
};

const attachmentSection = {
  padding: "20px",
  textAlign: "center",
};

const button = {
  backgroundColor: "#28a745",
  color: "#ffffff",
  padding: "10px 20px",
  borderRadius: "5px",
  textDecoration: "none",
  display: "inline-block",
  fontWeight: "bold",
};

const footer = {
  textAlign: "center",
  fontSize: "12px",
  color: "#777",
  marginTop: "20px",
};

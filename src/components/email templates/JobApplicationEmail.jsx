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
  contactNumber,
  address,
}) => (
  <Html>
    <Head />
    <Preview>
      Job Application: {first_name} {last_name} -{" "}
      {expertise?.split(" ").slice(0, 3).join(" ")}...
    </Preview>

    <Body style={main}>
      <Container style={container}>
        <Section style={headerSection}>
          <Text style={headerText}>JOB APPLICATION</Text>
          <Text style={applicantNameHeader}>
            {first_name} {last_name}
          </Text>
          <Text style={positionText}>
            {expertise.split(" ").slice(0, 5).join(" ")}
          </Text>
        </Section>

        <Section style={introSection}>
          <Text style={introText}>
            Thank you for considering my application. I am excited about the
            opportunity to contribute my skills and experience to your team.
          </Text>
        </Section>

        <Section style={contentSection}>
          <Row style={detailsRow}>
            <Column>
              <Text style={sectionTitle}>PERSONAL DETAILS</Text>

              <Row style={infoRow}>
                <Column style={infoLabelColumn}>
                  <Text style={infoLabel}>Full Name:</Text>
                </Column>
                <Column style={infoValueColumn}>
                  <Text style={infoValue}>
                    {first_name} {last_name}
                  </Text>
                </Column>
              </Row>

              <Row style={infoRow}>
                <Column style={infoLabelColumn}>
                  <Text style={infoLabel}>Contact:</Text>
                </Column>
                <Column style={infoValueColumn}>
                  <Text style={infoValue}>{contactNumber}</Text>
                </Column>
              </Row>

              <Row style={infoRow}>
                <Column style={infoLabelColumn}>
                  <Text style={infoLabel}>Email:</Text>
                </Column>
                <Column style={infoValueColumn}>
                  <Text style={infoValue}>{email}</Text>
                </Column>
              </Row>

              <Row style={infoRow}>
                <Column style={infoLabelColumn}>
                  <Text style={infoLabel}>Address:</Text>
                </Column>
                <Column style={infoValueColumn}>
                  <Text style={infoValue}>{address}</Text>
                </Column>
              </Row>

              <Row style={infoRow}>
                <Column style={infoLabelColumn}>
                  <Text style={infoLabel}>Education:</Text>
                </Column>
                <Column style={infoValueColumn}>
                  <Text style={infoValue}>{university}</Text>
                </Column>
              </Row>
            </Column>
          </Row>

          <Row style={expertiseSection}>
            <Column>
              <Text style={sectionTitle}>PROFESSIONAL EXPERTISE</Text>
              <Text style={expertiseText}>{expertise}</Text>
            </Column>
          </Row>

          {(githubLink || linkedinLink) && (
            <Row style={linksSection}>
              <Column>
                <Text style={sectionTitle}>PROFESSIONAL PROFILES</Text>
                <Row>
                  <Column style={{ width: "50%" }}>
                    {githubLink && (
                      <Link href={githubLink} style={profileLink}>
                        <Text style={profileLinkText}>GitHub Profile</Text>
                      </Link>
                    )}
                  </Column>
                  <Column style={{ width: "50%" }}>
                    {linkedinLink && (
                      <Link href={linkedinLink} style={profileLink}>
                        <Text style={profileLinkText}>LinkedIn Profile</Text>
                      </Link>
                    )}
                  </Column>
                </Row>
              </Column>
            </Row>
          )}
        </Section>

        <Section style={closingSection}>
          <Text style={closingText}>
            I look forward to the opportunity to discuss how my skills and
            experience align with your needs.
          </Text>
          <Text style={signatureText}>
            Sincerely,
            <br />
            {first_name} {last_name}
          </Text>
        </Section>

        <Text style={footer}>
          Application submitted on{" "}
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </Text>
      </Container>
    </Body>
  </Html>
);

export default JobApplicationEmail;
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  padding: "20px 0",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  maxWidth: "600px",
  border: "1px solid #e0e0e0",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
};

const headerSection = {
  textAlign: "center",
  padding: "30px 20px",
  backgroundColor: "#4f46e5", // Indigo color
  color: "#ffffff",
};

const headerText = {
  fontSize: "14px",
  fontWeight: "bold",
  letterSpacing: "2px",
  margin: "0",
  color: "#ffffff",
};

const applicantNameHeader = {
  fontSize: "28px",
  fontWeight: "bold",
  margin: "10px 0 5px",
  color: "#ffffff",
};

const positionText = {
  fontSize: "16px",
  color: "rgba(255, 255, 255, 0.9)",
  margin: "0",
};

const introSection = {
  padding: "25px 30px 5px",
  borderBottom: "1px solid #f0f0f0",
};

const introText = {
  fontSize: "16px",
  lineHeight: "24px",
  color: "#333333",
  margin: "0",
};

const contentSection = {
  padding: "20px 30px",
};

const detailsRow = {
  marginBottom: "20px",
};

const infoRow = {
  marginBottom: "8px",
};

const infoLabelColumn = {
  width: "130px",
};

const infoValueColumn = {
  width: "70%",
};

const infoLabel = {
  fontSize: "14px",
  color: "#666666",
  fontWeight: "600",
  margin: "0",
};

const infoValue = {
  fontSize: "14px",
  color: "#333333",
  margin: "0",
};

const sectionTitle = {
  fontSize: "14px",
  fontWeight: "bold",
  color: "#4f46e5", // Indigo
  margin: "0 0 15px",
  paddingBottom: "8px",
  borderBottom: "2px solid #4f46e5",
  letterSpacing: "1px",
};

const expertiseSection = {
  marginTop: "25px",
  backgroundColor: "#f9fafc",
  padding: "20px",
  borderRadius: "6px",
};

const expertiseText = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#333333",
  margin: "0",
};

const linksSection = {
  marginTop: "25px",
  backgroundColor: "#f0f4ff", // Light blue background
  padding: "20px",
  borderRadius: "6px",
};

const profileLink = {
  display: "block",
  backgroundColor: "#4f46e5",
  color: "#ffffff",
  padding: "8px 15px",
  borderRadius: "4px",
  textDecoration: "none",
  textAlign: "center",
  margin: "5px 0",
};

const profileLinkText = {
  fontSize: "14px",
  fontWeight: "bold",
  color: "#ffffff",
  margin: "0",
};

const closingSection = {
  padding: "10px 30px 20px",
  borderTop: "1px solid #f0f0f0",
};

const closingText = {
  fontSize: "15px",
  lineHeight: "22px",
  color: "#333333",
  margin: "10px 0",
};

const signatureText = {
  fontSize: "15px",
  lineHeight: "22px",
  color: "#333333",
  marginTop: "20px",
};

const footer = {
  textAlign: "center",
  fontSize: "12px",
  color: "#999999",
  padding: "15px",
  backgroundColor: "#f6f9fc",
};

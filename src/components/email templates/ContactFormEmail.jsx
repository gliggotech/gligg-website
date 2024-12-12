import { 
    Body, 
    Container, 
    Head, 
    Heading, 
    Html, 
    Preview, 
    Section, 
    Text,
    Row,
    Column
  } from '@react-email/components';
  
  export const ContactFormEmail = ({
    first_name,
    last_name,
    email,
    message
  }) => {
    return (
      <Html>
        <Head />
        <Preview>New Contact Form Submission from {first_name} {last_name}</Preview>
        <Body style={main}>
          <Container style={container}>
            <Section style={header}>
              <Heading style={heading}>
                Website Contact Form
              </Heading>
            </Section>
  
            <Section style={content}>
              <Row>
                <Column>
                  <Text style={sectionTitle}>Contact Details</Text>
                  <Text style={paragraph}>
                    <strong>Name:</strong> {first_name} {last_name}
                  </Text>
                  <Text style={paragraph}>
                    <strong>Email:</strong> {email}
                  </Text>
                </Column>
              </Row>
  
              <Row>
                <Column>
                  <Text style={sectionTitle}>Message</Text>
                  <Section style={messageBox}>
                    <Text style={messageParagraph}>
                      {message || 'No message provided'}
                    </Text>
                  </Section>
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Html>
    );
  };
  
  // Styles
  const main = {
    backgroundColor: '#f6f9fc',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
  };
  
  const container = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    padding: '20px',
    maxWidth: '600px',
    border: '1px solid #e6e6e6',
    borderRadius: '8px'
  };
  
  const header = {
    backgroundColor: '#0066cc',
    padding: '15px',
    color: 'white',
    textAlign: 'center'
  };
  
  const heading = {
    fontSize: '24px',
    color: 'white',
    margin: '0'
  };
  
  const content = {
    padding: '20px'
  };
  
  const sectionTitle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
    borderBottom: '1px solid #e6e6e6',
    paddingBottom: '10px',
    marginBottom: '15px'
  };
  
  const paragraph = {
    fontSize: '16px',
    color: '#333',
    margin: '10px 0'
  };
  
  const messageBox = {
    backgroundColor: '#f6f6f6',
    padding: '15px',
    borderRadius: '5px',
    border: '1px solid #e6e6e6'
  };
  
  const messageParagraph = {
    fontSize: '16px',
    color: '#333',
    margin: '0'
  };
  
  export default ContactFormEmail;
  
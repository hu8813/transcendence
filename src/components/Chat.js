import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";

const Chat = () => {
  const { t } = useTranslation();

  // Sample data for users and messages
  const chatData = [
    { user: "User1", message: "Hello, how are you?", time: "10:00 AM" },
    { user: "User2", message: "Hi, I'm fine, thank you!", time: "10:05 AM" },
    { user: "User3", message: "Hey there!", time: "10:10 AM" },
    { user: "User4", message: "What's up?", time: "10:15 AM" },
    { user: "User5", message: "Not much, just chilling.", time: "10:20 AM" },
  ];

  // Sample data for logged-in users
  const loggedInUsers = ["User1", "User2", "User3", "User4", "User5"];

  return (
    <Container className="mt-4">
      <Row>
        <Col md={8}>
          <div className="chat-container">
            <h2>{t("chat.title")}</h2>
            {/* Render each message in the chat */}
            <Table striped bordered hover>
              <tbody>
                {chatData.map((entry, index) => (
                  <tr key={index}>
                    <td className="username">{entry.user}</td>
                    <td>{entry.message}</td>
                    <td className="message-time">{entry.time}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            {/* Form for sending messages */}
            <Form>
              <Form.Group controlId="messageInput">
                <Form.Control type="text" placeholder="Type your message..." />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send
              </Button>
            </Form>
          </div>
        </Col>
        <Col md={4}>
          <div className="user-list">
            <h3>{t("chat.users")}</h3>
            {/* Table to display logged-in users */}
            <Table striped bordered hover>
              <tbody>
                {loggedInUsers.map((user, index) => (
                  <tr key={index}>
                    <td>{user}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Chat;

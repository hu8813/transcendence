import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";

const Chat = () => {
  const { t } = useTranslation();

  // Sample data for users and messages
  const chatData = [
    { user: "User1", message: "Hello, how are you?" },
    { user: "User2", message: "Hi, I'm fine, thank you!" },
    { user: "User3", message: "Hey there!" },
    { user: "User4", message: "What's up?" },
    { user: "User5", message: "Not much, just chilling." },
  ];

  return (
    <Container className="mt-4">
      <Row>
        <Col md={4}>
          <div className="user-list">
            <h3>{t("chat.users")}</h3>
            {/* Render user list here */}
            {chatData.map((entry, index) => (
              <div key={index} className="user">
                {entry.user}
              </div>
            ))}
          </div>
        </Col>
        <Col md={8}>
          <div className="chat-container">
            <h2>{t("chat.title")}</h2>
            {/* Render each message in the chat */}
            {chatData.map((entry, index) => (
              <div key={index} className="chat-message">
                <span className="username">{entry.user}: </span>
                <span>{entry.message}</span>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Chat;

import React, { useState, useRef, useEffect } from "react";
import "./Chat.css";

const PERSON_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";
const PERSON_NAME = "user42";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      name: PERSON_NAME,
      img: PERSON_IMG,
      side: "right",
      text: "Hello!",
      time: formatDate(new Date()),
    },
    {
      name: PERSON_NAME,
      img: PERSON_IMG,
      side: "right",
      text: "How are you?",
      time: formatDate(new Date()),
    },
    {
      name: PERSON_NAME,
      img: PERSON_IMG,
      side: "right",
      text: "Is anyone there?",
      time: formatDate(new Date()),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [onlineUsers, setOnlineUsers] = useState(["John", "Alice", "Bob"]); // Example online users

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!inputText.trim()) return;

    const newMessage = {
      name: PERSON_NAME,
      img: PERSON_IMG,
      side: "right",
      text: inputText,
      time: formatDate(new Date()),
    };
    setMessages([...messages, newMessage]);
    setInputText("");
  };

  return (
    <div className="msger">
      <header className="msger-header">
        <br /> <br /> <br />
        <div className="msger-inputarea">
          <br /> <br /> <br />
          <input
            type="text"
            className="msger-input"
            placeholder="Enter your message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button
            type="submit"
            className="msger-send-btn"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      </header>

      <main className="msger-chat">
        <div className="msg-wrapper">
          {messages.map((msg, index) => (
            <div key={index} className={`msg ${msg.side}-msg`}>
              <div
                className="msg-img"
                style={{ backgroundImage: `url(${msg.img})` }}
              ></div>

              <div className="msg-bubble">
                <div className="msg-info">
                  <div className="msg-info-name">{msg.name}</div>
                  <div className="msg-info-time">{msg.time}</div>
                </div>

                <div className="msg-text">{msg.text}</div>
              </div>
            </div>
          ))}
        </div>
        <div ref={messagesEndRef} />
      </main>

      <aside className="msger-users">
        <h2>Online Users</h2>
        <ul>
          {onlineUsers.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

// Utility function
function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();
  return `${h.slice(-2)}:${m.slice(-2)}`;
}

export default Chat;

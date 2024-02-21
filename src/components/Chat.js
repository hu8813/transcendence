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

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
  };

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

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  const handleUserAction = (action, username) => {
    console.log(`Action "${action}" for user "${username}"`);
  };

  return (
    <div className="msger">
      <main className="msger-chat" ref={messagesEndRef}>
        {messages.map((msg, index) => (
          <div key={index} className={`msg ${msg.side}-msg`}>
            <div
              className="msg-info"
              style={{ order: msg.side === "right" ? 1 : 2 }}
            >
              <div className="msg-info-name">
                {msg.time} {msg.name}: {msg.text}
              </div>
            </div>

            <div className="msg-text"></div>
          </div>
        ))}
      </main>

      <header className="msger-header">
        <div className="msger-inputarea">
          <input
            type="text"
            className="msger-input"
            placeholder="Enter your message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
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

      <aside className="msger-users">
        <h2>Online Users</h2>
        <ul>
          {onlineUsers.map((user, index) => (
            <li key={index}>
              <div className="user-actions">
                {user}{" "}
                <button onClick={() => handleUserAction("View Profile", user)}>
                  View Profile
                </button>{" "}
                <button
                  onClick={() => handleUserAction("Invite to Play", user)}
                >
                  Invite to Play
                </button>
              </div>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();
  return `${h.slice(-2)}:${m.slice(-2)}`;
}

export default Chat;

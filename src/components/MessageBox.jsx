import { MdSend } from "react-icons/md";
import { useState } from "react";
import './MessageBox.css';

const MessageBox = () => {
  const [animate, setAnimate] = useState(false);

  const handleSend = () => {
  setAnimate(false);

  setTimeout(() => {
    setAnimate(true);
  }, 10);

  setTimeout(() => {
    setAnimate(false);
  }, 1200);
};

  return (
  <div className={`hero-message-container ${animate ? "animate" : ""}`}>

    <input
      className="hero-message-input"
      type="text"
      placeholder="Enter your greetings here..."
      maxLength={50}
    />

    <button
      className="hero-message-send-button"
      onClick={handleSend}
    >
      <MdSend className="send-icon" size={30} />
    </button>

    {/* flying icon directly inside container */}
    <MdSend className="flying-icon" size={28} />

  </div>
);
};

export default MessageBox;
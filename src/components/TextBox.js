import React, { useState } from "react";

const TextBox = ({ showSpeechBubble }) => {
  const [displayText, setDisplayText] = useState("");
  const [userInput, setUserInput] = useState("");

  // Function to display text character by character
  const displayTextCharacterByCharacter = (text) => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust the interval as needed
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = () => {
    // Handle user input and generate chatbot response here
    // For this example, let's echo the user's input
    displayTextCharacterByCharacter(`You: ${userInput}\nChatbot: ${userInput}`);
    setUserInput("");
  };

  return (
    showSpeechBubble && (
      <div className="speech-bubble">
        <div className="speech-text">{displayText}</div>
        <input
          type="text"
          placeholder="Your response..."
          value={userInput}
          onChange={handleUserInput}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    )
  );
};

export default TextBox;

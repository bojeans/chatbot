import React, { useState, useEffect, useRef } from "react";

const TextBox = ({ showSpeechBubble, userName }) => {
  const [displayText, setDisplayText] = useState("");
  const [userInput, setUserInput] = useState("");
  const interval = useRef();

  // Function to display text character by character
  const displayTextCharacterByCharacter = (text) => {
    let index = 0;
    interval.current = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(index));
        index++;
      } else {
        clearInterval(interval.current);
      }
    }, 100); // Adjust the interval as needed
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = () => {
    let response = "";
    // Handle user input and generate chatbot response here
    // For this example, let's echo the user's input
    if (userInput.toLowerCase().includes("hello")) {
      response = "Hello! How can I help you?";
    } else {
      response = `You said: ${userInput}`;
    }
    displayTextCharacterByCharacter(`You: ${userInput}\nChatbot: ${response}`);
    setUserInput("");
  };

  useEffect(() => {
    if (userName) {
      displayTextCharacterByCharacter(`Chatbot: ${userName}`);
    }
    return () => {
      clearInterval(interval);
    };
  }, [userName]);

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

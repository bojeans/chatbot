import React, { useState } from "react";
import Robot from "./assets/robot.jpg";

const App = () => {
  const [showSpeechBubble, setShowSpeechBubble] = useState(false);
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

  const handleStartChat = () => {
    setShowSpeechBubble(true);
    displayTextCharacterByCharacter("Hello, how can I assist you?");
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
    <div
      data-testid="idForTesting"
      className="main flex justify-center items-center h-screen"
    >
      <img
        src={Robot}
        alt="chatbot"
        className="w-1/2 h-auto"
        onClick={handleStartChat}
      />

      {showSpeechBubble && (
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
      )}
    </div>
  );
};

export default App;

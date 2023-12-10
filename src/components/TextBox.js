import React, { useState, useEffect, useRef } from "react";

const TextBox = ({ showSpeechBubble, message }) => {
  const [displayText, setDisplayText] = useState("");
  const [personsName, setPersonsName] = useState("");
  const [userInput, setUserInput] = useState("");
  const [nameProvided, setNameProvided] = useState(false);
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
    if (!nameProvided) {
      setNameProvided(true);
      setPersonsName(userInput);
      displayTextCharacterByCharacter(`How are you today ${userInput}?`);
    } else {
      // Logic to handle further conversation
      // Example: Check if the response matches any word in positive or negative arrays
      const positive = ["great", "good", "fantastic", "wonderful"];
      const negative = ["okay", "ok", "bad", "not good"];
      let response = "";
      // Handle user input and generate chatbot response here
      // For this example, let's echo the user's input
      if (positive.includes(userInput.toLowerCase())) {
        response = `That's awesome! How can I assist you today ${personsName}?`;
      } else if (negative.includes(userInput.toLowerCase())) {
        response = `I'm sorry to hear that. How can I help make your day better ${personsName}?`;
      } else {
        response = `Interesting! Tell me more.${personsName}`;
      }
      displayTextCharacterByCharacter(`${userInput}\nChatbot: ${response}`);
      setUserInput("");
    }
  };

  useEffect(() => {
    if (message) {
      displayTextCharacterByCharacter(`Chatbot: ${message}`);
    }
    return () => {
      clearInterval(interval.current);
    };
  }, [message]);

  return (
    showSpeechBubble && (
      <div className="relative bg-white p-4 rounded-lg shadow-md max-w-sm w-full mx-auto mt-4">
        <div className="speech-text mb-4">{displayText}</div>
        <input
          type="text"
          className="border p-2 rounded w-full"
          placeholder="Your response..."
          value={userInput}
          onChange={handleUserInput}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
        >
          Send
        </button>
      </div>
    )
  );
};

export default TextBox;

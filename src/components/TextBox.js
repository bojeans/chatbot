import React, { useState, useEffect } from "react";

const TextBox = ({ showSpeechBubble, message }) => {
  const [displayText, setDisplayText] = useState("");
  const [personsName, setPersonsName] = useState("");
  const [userInput, setUserInput] = useState("");
  const [nameProvided, setNameProvided] = useState(false);

  // Function to display text character by character
  const displayTextCharacterByCharacter = async (text) => {
    let accumulatedText = ""; // Local variable to accumulate text

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    for (let char of text) {
      await delay(5);
      accumulatedText += char; // Append char to the local variable
    }

    setDisplayText(accumulatedText); // Update state once after loop
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (!nameProvided) {
      setNameProvided(true);
      setPersonsName(userInput);
      displayTextCharacterByCharacter(` How are you today ${userInput}?`);
    } else {
      // Logic to handle further conversation
      // Example: Check if the response matches any word in positive or negative arrays
      const positive = ["great", "good", "fantastic", "wonderful"];
      const negative = ["okay", "ok", "bad", "not good"];
      let response = "";
      // Handle user input and generate chatbot response here
      // For this example, let's echo the user's input
      if (positive.includes(userInput.toLowerCase())) {
        response = ` That's awesome! How can I assist you today ${personsName}?`;
      } else if (negative.includes(userInput.toLowerCase())) {
        response = ` I'm sorry to hear that. How can I help make your day better ${personsName}?`;
      } else {
        response = ` Interesting! Tell me more.${personsName}`;
      }
      displayTextCharacterByCharacter(`${response} `);
      setUserInput("");
    }
  };

  useEffect(() => {
    console.log("message:", message);
    if (message) {
      displayTextCharacterByCharacter(message);
    }
  }, [message]);

  return (
    <div className="relative bg-white dark:bg-gray-700 p-2 rounded-lg shadow-md max-w-md w-full mx-auto mt-4">
      <div className="speech-text mb-4 overflow-auto max-h-32">
        {displayText}
      </div>
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
  );
};

export default TextBox;

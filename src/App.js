import React, { useState } from "react";
import TextBox from "./components/TextBox";
import Robot from "./assets/robot.jpg";

const App = () => {
  const [showSpeechBubble, setShowSpeechBubble] = useState(false);
  const [initialMessage, setInitialMessage] = useState("");
  const [title, setTitle] = useState(
    "Click on the floating robot to start chatting!"
  );

  const handleStartChat = () => {
    setShowSpeechBubble(true);
    setTitle(
      "If you get stuck, just type 'help' and I'll assist you. If you want to start over, just type 'reset'."
    );
    setInitialMessage(
      ` Hi there! I'm your "friendly" chatbot. What's your name? `
    );
  };
  return (
    <>
      <div>
        <p>{title}</p>
      </div>
      <div
        data-testid="idForTesting"
        className="main flex justify-center items-center h-screen"
      >
        <img
          src={Robot}
          alt="chatbot"
          arialabel="start chatting with the chatbot"
          className="w-1/2 h-auto cursor-pointer floating-animation"
          onClick={handleStartChat}
        />
        <TextBox showSpeechBubble={showSpeechBubble} message={initialMessage} />
      </div>
    </>
  );
};

export default App;

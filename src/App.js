import React, { useState } from "react";
import TextBox from "./components/TextBox";
import Robot from "./assets/robot.jpg";

const App = () => {
  const [showSpeechBubble, setShowSpeechBubble] = useState(false);

  const handleStartChat = () => {
    setShowSpeechBubble(true);
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
      <TextBox showSpeechBubble={showSpeechBubble} />
    </div>
  );
};

export default App;

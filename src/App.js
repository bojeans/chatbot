import React, { useState } from "react";
import TextBox from "./components/TextBox";
import Robot from "./assets/robot.jpg";

const App = () => {
  const [showSpeechBubble, setShowSpeechBubble] = useState(false);
  const [userName, setUserName] = useState("");

  const handleStartChat = () => {
    setShowSpeechBubble(true);
    setUserName("What's your name?");
  };
  return (
    <>
      <div>
        <p>Click on the robot to start chatting!</p>
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
        <TextBox showSpeechBubble={showSpeechBubble} userName={userName} />
      </div>
    </>
  );
};

export default App;

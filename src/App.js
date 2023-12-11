import React, { useState } from "react";
import TextBox from "./components/TextBox";
import Robot from "./assets/robot.jpg";
import DarkModeToggle from "./components/DarkModeToggle";
import { DarkModeProvider } from "./components/DarkModeContext";

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
    <DarkModeProvider>
      <div className="flex flex-col p-4">
        <div className="flex-none mb-3">
          <DarkModeToggle />
        </div>
        <div className="flex-grow flex flex-col justify-center items-center p-4 space-y-4">
          <h1 className="text-2xl mb-12 md:text-4xl font-bold dark:text-white">
            {title}
          </h1>
          <img
            src={Robot}
            alt="chatbot"
            className="robot-image w-1/2 md:w-1/3 lg:w-1/4 h-auto cursor-pointer"
            onClick={handleStartChat}
          />
        </div>
        {showSpeechBubble && (
          <div className="flex-none p-8">
            <TextBox message={initialMessage} />
          </div>
        )}
      </div>
    </DarkModeProvider>
  );
};

export default App;

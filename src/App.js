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
      <div>
        <DarkModeToggle />
        <h1 className="text-shadow text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 dark:from-gray-700 dark:to-gray-500 md:mb-5 leading-normal md:leading-relaxed">
          {title}
        </h1>

        <div
          data-testid="idForTesting"
          className="main flex justify-center items-center h-screen"
        >
          <img
            src={Robot}
            alt="chatbot"
            aria-label="start chatting with the chatbot"
            className="w-1/2 md:w-1/3 lg:w-1/4 h-auto cursor-pointer floating-animation"
            onClick={handleStartChat}
          />
          <TextBox
            showSpeechBubble={showSpeechBubble}
            message={initialMessage}
          />
        </div>
      </div>
    </DarkModeProvider>
  );
};

export default App;

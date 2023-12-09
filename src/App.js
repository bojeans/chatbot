import React from "react";
import Robot from "./assets/robot.jpg";
import "./index.css";

const App = () => {
  return (
    <div
      data-testid="idForTesting"
      className="main flex justify-center items-center h-screen"
    >
      <img src={Robot} alt={"chatbot"} className="w-1/2 h-auto" />
    </div>
  );
};

export default App;

import React from "react";
import Robot from "./assets/robot.jpg";

const App = () => {
  return (
    <div data-testid="idForTesting" className="main">
      <img src={Robot} alt={"chatbot"} />
    </div>
  );
};

export default App;

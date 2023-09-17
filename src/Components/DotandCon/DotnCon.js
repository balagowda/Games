import React, { useState } from "react";
import "./DotnCon.css";

function DotAndConGame() {
  const numRows = 10;
  const numCols = 10;

  const initialDots = Array.from({ length: numRows * numCols }, (_, index) => ({
    id: index + 1,
    connected: false,
  }));

  const [dots, setDots] = useState(initialDots);
  const [selectedDot, setSelectedDot] = useState(null);

  const handleDotClick = (dot) => {
    if (dot.connected) {
      // If the dot is already connected, do nothing
      return;
    }

    if (selectedDot === null) {
      // If no dot is selected, mark this dot as selected
      setSelectedDot(dot);
    } else {
      // If a dot is already selected, connect them
      const newDots = [...dots];
      newDots[dot.id - 1].connected = true;
      newDots[selectedDot.id - 1].connected = true;
      setDots(newDots);
      setSelectedDot(null);
    }
  };

  return (
    <div className="main-board">
      <div className="dot-and-con-game">
        <h2>Dot and Boxes Game</h2>
        <div className="game-grid">
          {dots.map((dot) => (
            <div
              key={dot.id}
              className={`dot ${dot.connected ? "connected" : ""}`}
              onClick={() => handleDotClick(dot)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DotAndConGame;

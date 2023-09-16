import React, { useState } from "react";
import "./DotnCon";

const DotnCon = () => {
  const [gridSize, setGridSize] = useState(3);
  const [boxes, setBoxes] = useState(
    Array(gridSize - 1)
      .fill(0)
      .map(() => Array(gridSize - 1).fill(false))
  );
  const [currentPlayer, setCurrentPlayer] = useState("Player 1");

  const handleBoxClick = (rowIndex, colIndex) => {
    const updatedBoxes = [...boxes];
    updatedBoxes[rowIndex][colIndex] = true;
    setBoxes(updatedBoxes);

    // Check for a completed box
    const isCompletedBox = checkForCompletedBox(rowIndex, colIndex);
    if (!isCompletedBox) {
      // Toggle player turn
      setCurrentPlayer(currentPlayer === "Player 1" ? "Player 2" : "Player 1");
    }
  };

  const checkForCompletedBox = (rowIndex, colIndex) => {
    let completedBox = false;

    // Check for a completed box in the top-left corner
    if (rowIndex > 0 && colIndex > 0) {
      const topLeft = boxes[rowIndex - 1][colIndex - 1];
      const topRight = boxes[rowIndex - 1][colIndex];
      const bottomLeft = boxes[rowIndex][colIndex - 1];

      if (topLeft && topRight && bottomLeft) {
        completedBox = true;
        // TODO: Update player's score
      }
    }

    // TODO: Implement checking for completed boxes in other corners

    return completedBox;
  };

  const renderGrid = () => {
    const rows = [];
    const numLines = gridSize * 2 - 1;

    for (let row = 0; row < numLines; row++) {
      for (let col = 0; col < numLines; col++) {
        if (row % 2 === 0 && col % 2 === 0) {
          // Render dots
          rows.push(<div key={`${row}-${col}`} className="dot" />);
        } else if (row % 2 === 0 && col % 2 !== 0) {
          // Render horizontal lines
          rows.push(
            <div
              key={`${row}-${col}`}
              className={`line horizontal ${
                boxes[row / 2][Math.floor(col / 2)] ? "completed" : "" //error area
              }`}
              onClick={() => handleBoxClick(row / 2, Math.floor(col / 2))}
            />
          );
        } else if (row % 2 !== 0 && col % 2 === 0) {
          // Render vertical lines
          rows.push(
            <div
              key={`${row}-${col}`}
              className={`line vertical ${
                boxes[Math.floor(row / 2)][col / 2] ? "completed" : ""
              }`}
              onClick={() => handleBoxClick(Math.floor(row / 2), col / 2)}
            />
          );
        } else {
          // Render empty spaces
          rows.push(<div key={`${row}-${col}`} className="empty-space" />);
        }
      }
    }

    return rows;
  };

  return (
    <div className="main-board ">
      <div className="app">
        <h1>Dots and Boxes</h1>
        <div className="grid">{renderGrid()}</div>
        <div className="current-player">Current Player: {currentPlayer}</div>
      </div>
    </div>
  );
};

export default DotnCon;

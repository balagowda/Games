import React, { useState, useEffect } from 'react';
import './Simon.css';

const colors = ['red', 'green', 'blue', 'yellow'];

function SimonGame() {
  const [sequence, setSequence] = useState([]);
  const [userSequence, setUserSequence] = useState([]);
  const [round, setRound] = useState(1);
  const [message, setMessage] = useState('Simon says...');

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const generateRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * 4);
    return colors[randomIndex];
  };

  const startGame = async () => {
    setMessage('Simon says...');
    await delay(1000);

    const newColor = generateRandomColor();
    setSequence((prevSequence) => [...prevSequence, newColor]);
  };

  const handleColorClick = async (color) => {
    setUserSequence((prevUserSequence) => [...prevUserSequence, color]);

    if (userSequence.join('') !== sequence.slice(0, userSequence.length).join('')) {
      setMessage(`Game Over! You reached round ${round}. Click to play again.`);
      setSequence([]);
      setUserSequence([]);
      setRound(1);
      return;
    }

    if (userSequence.length === sequence.length) {
      setMessage('Good job! Next round...');
      await delay(1000);
      setRound((prevRound) => prevRound + 1);
      setUserSequence([]);
      startGame();
    }
  };

  useEffect(() => {
    startGame();
  }, []);

  return (
    <div className="main-board ">
    <div className="simon-game">
      <h1>Simon's Game</h1>
      <div className="simon-board">
        {colors.map((color) => (
          <div
            key={color}
            className={`simon-color ${color}`}
            onClick={() => handleColorClick(color)}
          ></div>
        ))}
      </div>
      <p className="message">{message}</p>
    </div>
    </div>
  );
}

export default SimonGame;

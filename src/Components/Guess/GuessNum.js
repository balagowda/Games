import "./guess.css";

import React, { useState } from "react";

const GuessNum = () => {
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [randomNumber] = useState(Math.floor(Math.random() * 100) + 1);

  const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

  const handleGuessSubmit = (event) => {
    event.preventDefault();

    const playerGuess = parseInt(guess);
    if (isNaN(playerGuess)) {
      setMessage("Please enter a valid number.");
    } else if (playerGuess === randomNumber) {
      setMessage("Congratulations! You guessed the number.");
    } else if (playerGuess < randomNumber) {
      setMessage("Try a higher number.");
    } else {
      setMessage("Try a lower number.");
    }

    setGuess("");
  };

  return (
    <div className="main-board ">
      <div className="guess-the-number-container">
        <h2>Guess the Number</h2>
        <form onSubmit={handleGuessSubmit}>
          <input
            type="number"
            placeholder="Enter your guess"
            value={guess}
            onChange={handleGuessChange}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default GuessNum;

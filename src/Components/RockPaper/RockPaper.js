import './RockPaper.css';

import React, { useState } from 'react';

const RockPaper = () => {
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const choices = ['rock', 'paper', 'scissors'];

  const handleChoice = (choice) => {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    setPlayerChoice(choice);
    setComputerChoice(computerChoice);
    setResult(getResult(choice, computerChoice));
  };

  const Reset = ()=>{
    setPlayerChoice("");
    setResult("");
  }

  const getResult = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return 'You win!';
    } else {
      return 'Computer wins!';
    }
  };

  return (
    <div className='main-box'>
    <div className="rock-paper-scissors-container">
      <h2>Rock, Paper, Scissors</h2>
      <div className="choices-container">
        {choices.map((choice) => (
          <button
            key={choice}
            className={`choice ${playerChoice === choice ? 'active' : ''}`}
            onClick={() => handleChoice(choice)}
          >
            {choice}
          </button>
        ))}
      </div>
      <div className="result-container">
        {playerChoice && computerChoice && (
          <>
            <p>Your choice: {playerChoice}</p>
            <p>Computer's choice: {computerChoice}</p>
            <p className="result">{result}</p>
          </>
        )}
      </div>
      <div className='reset'>
      {result && (
        <button type="button" class="btn btn-danger" onClick={()=>Reset()}>RePlay</button>
      )}
      </div>
    </div>
    </div>
  );
};

export default RockPaper;

import React, { useState } from 'react';
import './App.css';
import htmlandcss from './htmlandcss.js';
import jsandreact from './jsandreact.js';
const App = () => {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [...htmlandcss, ...jsandreact];
  // const log = () => {
  //   console.log(htmlandcss);
  //   console.log(jsandreact);
  //   console.log(questions);
  // };
  // log();

  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };
  return (
    <div className="App">
      {/* 1. Header */}
      <h1>Web Dev Quizz</h1>

      {/* 2. Aktuelle Punktzahl */}
      <h2>Aktuelle Punktzahl: {score}</h2>

      {/* 4. Endergebnis */}
      {showResults ? (
        <div className="endergebnis">
          <h1>Endergebnis</h1>
          <h2>
            {score} von {questions.length} korrekt - ({(score / questions.length) * 100}%)
          </h2>
          <button onClick={restartGame}>Neustart</button>
        </div>
      ) : (
        <div className="fragenKarte">
          <h2>
            Frage {currentQuestion + 1} von {questions.length}
          </h2>
          <h3 className="fragenText">{questions[currentQuestion].text}</h3>

          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li key={option.id} onClick={() => optionClicked(option.isCorrect)}>
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;

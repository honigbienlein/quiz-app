import React, { useState, useEffect } from 'react';
import './App.css';
import htmlandcss from './htmlandcss.js';
import jsandreact from './jsandreact.js';
const App = () => {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [disabled, setDisabled] = useState(false)

  const [questions, setQuestions] = useState([...htmlandcss, ...jsandreact]);
  const [select, setSelect] = useState(true);
  const [selectJS, setSelectJS] = useState(true);
  const [html, setHtml] = useState(true)
  const [react, setReact] = useState(true)

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
    setDisabled(false)
  };
  const change = () => {
    setSelect(!select);
  };
  const changeJS = () => {
    setSelectJS(!selectJS);
  };

  useEffect(() => {
    if (select && selectJS) {
      setQuestions([...htmlandcss, ...jsandreact]);
    } else if (!select) {
      setQuestions([...jsandreact]);
    } else if (!select) {
      setQuestions([...htmlandcss]);
    }
  }, [select]);

  useEffect(()=>{
    if (currentQuestion > 0) {
      setDisabled(true)
    }
  }, [currentQuestion])

  useEffect(() => {
    if (select && selectJS) {
      setQuestions([...htmlandcss, ...jsandreact]);
    } else if (!selectJS) {
      setQuestions([...htmlandcss]);
    }
  }, [selectJS]);




  return (
    <div className="App">
      {/* 1. Header */}
      <h1>Web Dev Quizz</h1>

      {/* Checkbox */}
      <div>
        <label>
        <input type="checkbox" name='htmlandcss' id='htmlandcss'  onClick={change} defaultChecked={select} disabled={disabled}/>HTML und CSS
        </label>
      </div>
      
      <div>
        <label>
        <input type="checkbox" name='jsandreact' id='jsandreact'  onClick={changeJS} defaultChecked={selectJS} disabled={disabled}/>JS und React
        </label>
      </div>



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

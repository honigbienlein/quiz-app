import './App.css';

function App() {
  return (
    <div className='App'>
      {/* 1. Header */}
      <h1>Web Dev Quizz</h1>

      {/* 2. Aktuelle Punktzahl */}
      <h2>Aktuelle Punktzahl: 8</h2>

      {/* 3. Fragen Karte */}
      <div className="fragenKarte">
        <h2>Frage 1 von 10</h2>
        <h3 className='fragenText'>Wie viele Leute sind in Gruppe Vier?</h3>

        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>

      {/* 4. Endergebnis */}
      <div className='endergebnis'>
        <h1>Endergebnis</h1>
        <h2>
          1 von 10 korrekt</h2>
        <button>Neustart</button>

      </div>

    </div>
  );
}

export default App;

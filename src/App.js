import React from 'react';
import './App.css';
import FetchItems from './components/FetchItems';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Frontend Task for Interns Interview</h1>
      </header>
      <main>
        <FetchItems />
      </main>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import GamePage from './pages/GamePage';
function App() {
  const [start, setStart] = useState(false);

  return (
    <div className="App">
      {
        !start? <LandingPage setStart={setStart}/>: <GamePage />
      }
    </div>
  );
}

export default App;

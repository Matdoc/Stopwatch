import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((previousTime) => previousTime + 1000);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const s = Math.floor(time / 1000) % 60;
    const m = Math.floor(time / 60000);

    const formatNumber = (num) => num.toString().padStart(2, '0');

    return `${m}:${formatNumber(s)}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <h2>Time: {formatTime(time)}</h2>
      <button onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;

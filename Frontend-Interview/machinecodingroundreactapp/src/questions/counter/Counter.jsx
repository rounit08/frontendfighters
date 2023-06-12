import React, { useState, useEffect } from "react";
import "./Counter.css";

const Counter = ({ maxValue }) => {
  const [counter, setCounter] = useState(0);

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setCounter((prevCount) => prevCount + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning, maxValue]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };
  const handleReset = () => {
    setCounter(0);
    setIsRunning(false);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  return (
    <div className="counter">
      <div className="counter__button">
        {isRunning ? (
          <button onClick={handlePause}>Pause</button>
        ) : (
          <button onClick={handleStart}>Start</button>
        )}
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <p> This counter will increase after every 1s</p>
      <div className="counter__display">{counter}</div>
    </div>
  );
};

export default Counter;

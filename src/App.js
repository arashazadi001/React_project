import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Hello from './Heloo';
import Timer from './Timer';
import './style.css';
import Cornometr from './Cornometr';
import TimeList from './TimeLis';
import { testContext } from './testContext';

const App = () => {
  const [title, setTitle] = useState("سلام دوستان عزیزم");
  const [isLight, setIsLight] = useState(false);
  const [timeArr, setTimeArr] = useState(["00:00:00"]); // ✅ اصلاح شد

  const handleSetLight = () => {
    setIsLight(!isLight);
    setTitle(isLight ? "سلام دوستان عزیزم" : "به کد یاد خوش آمدید.");
  };

  useEffect(() => {
    console.log("UseEffect");
    return () => {
      // cleanup (اگر نیاز باشه)
    };
  }, [isLight]);

  return (
    <testContext.Provider value="white">
    <div className='main' style={{ background: isLight ? "white" : "black", color: isLight ? "black" : "white" }}>
      <Hello title={title} color={isLight ? "black" : "white"} />
      <Timer timeArr={timeArr} setTimeArr={setTimeArr} isLight={isLight} handleSetLight={handleSetLight} />
    
    </div>
    </testContext.Provider>
  );
};

export default App;

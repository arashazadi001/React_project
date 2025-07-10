import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import Hello from './Heloo';
import Timer from './Timer';
import './style.css'




class App extends React.Component {
  render() {
    return (
      <div className='main'>
         <Hello/>
         <Timer/>
      </div>
    );
  }
}

export default App;
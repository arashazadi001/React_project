import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';


class Hello extends React.Component {
  render(){
    return(
      <h1>سلام دوستان</h1>

    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
         <Hello/>
         <Timer/>
      </div>
    );
  }
}


class Timer extends React.Component
{
  render(){
    return(
      <h2>
          it is {new Date().toLocaleTimeString()}
      </h2>
    );
  }

}


const tick = ()=> {
    const root = ReactDOM.createRoot(document.getElementById('root')).render(<App/>)



}


setInterval(() => {
  tick();
}, 1000);







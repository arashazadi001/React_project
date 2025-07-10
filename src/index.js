import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'


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
      <div className='main'>
         <Hello/>
         <Timer/>
      </div>
    );
  }
}


class Timer extends React.Component
{
  constructor(){
    super();
    this.state={
      time: new Date().toLocaleTimeString()

    }
  }
  render(){
    setInterval(() => {
      this.setState({
       time: new Date().toLocaleTimeString()
      })
    }, 1000);
    return(
      <h2 className='timer'>
          it is {this.state.time}
      </h2>
    );
  }

}


//const tick = ()=>
 //  {
    const root = ReactDOM.createRoot(document.getElementById('root')).render(<App/>)



//}


//setInterval(() => {
//  tick();
//}, 1000);







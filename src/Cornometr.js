import React, { Component } from 'react';
//import ReactDOM from 'react-dom/client';
import './style.css';
var interval;

class Cornometr extends Component {
  constructor() {
    super();
    this.state = {
      counter: 100
    };
  }



startInterval=()=>{
  interval= setInterval(() => {
    this.setState({
      counter: this.state.counter-1
    })
    
  }, 1000);
}


stopInterval=()=>{
 clearInterval(interval);
}

resetInteval=()=>{
 
}
  

  render() {
    return (
      <>
      <h2 className="cornometr">  Cornometr:
        {this.state.counter}
        </h2>


      </>

      
    );
  }
}

export default Cornometr;


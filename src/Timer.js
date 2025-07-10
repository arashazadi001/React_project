import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
 var interval;
class Timer extends React.Component
{

  constructor(){
    super();
    this.state={
      time: new Date().toLocaleTimeString()

    }
  }

  componentDidMount(){
    console.log("componentDidMount");
   interval=  setInterval(() => {
      this.setState({
       time: new Date().toLocaleTimeString()
      })
    }, 1000);
  }

  componentDidUpdate (){
    if(this.state.time == "10:45:30 AM")
    {
        clearInterval(interval);
    }

  }


  componentWillUnmount(){
    console.log("componentWillUnmount");
  }
  render(){
    console.log("render");

    return(
      <h2 className='timer'>
          it is {this.state.time}
      </h2>
    );
  }

}
export default Timer;
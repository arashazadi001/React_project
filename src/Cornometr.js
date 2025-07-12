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

   componentDidMount(){
    console.log("componentDidMount");
   interval=  setInterval(() => {
      this.setState({
       counter: this.state.counter-1
      })
    }, 1000);
  }


  
  componentDidUpdate (){
    if(this.state.counter == 0)
    {
        clearInterval(interval);
    }

  }

  componentWillUnmount() {
    clearInterval(this.interval); // برای جلوگیری از memory leak
  }

  render() {
    return (
      <div className="cornometr">
      <h2> Cornometr:
        {this.state.counter}
        </h2>
      </div>
    );
  }
}

export default Cornometr;


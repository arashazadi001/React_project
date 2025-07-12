import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import Hello from './Heloo';
import Timer from './Timer';
import './style.css'
import Cornometr from './Cornometr';




class App extends React.Component {

  constructor(){
    super();
    this.state= {
      title:"سلام دوستان عزیزم"
    }
  }
  handleSetTitle=()=>{
    this.setState({
      title:"به کد یاد خوش آمدید."
    })
  }

  render() {
    return (
      <div className='main'>
         <Hello title ={this.state.title}/>
         <Timer x={this.handleSetTitle}/>

      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

class Hello extends React.Component {
  render(){
    return(
      <div>
             <h1>{this.props.title} </h1>
             
      </div>
 

    );
  }
}
export default Hello;

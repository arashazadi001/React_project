import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

//class Hello extends React.Component {
 // render(){
   // return(
     // <div>
       //  <h1 className='h1'>  {this.props.title} </h1>
             
     // </div>
 

    //);
 // }
//}
const Hello = ({ title, color }) => {
  return <h1 style={{ color }}>{title}</h1>;
};



export default Hello;

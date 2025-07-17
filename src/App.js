import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Hello from './Heloo';
import Timer from './Timer';
import './style.css'
import Cornometr from './Cornometr';




//class App extends React.Component {

  //constructor(){
  //  super();
  //  this.state= {
  /// *   title:"سلام دوستان عزیزم"
   // }
 // }
 // handleSetTitle=()=>{
 //   this.setState({
 //     title:"به کد یاد خوش آمدید."
 //   })
//  }

 // render() {
  //  return (
   //   <div className='main'>
   //      <Hello title ={this.state.title}/>
   //      <Timer x={this.handleSetTitle}/>

   //   </div>
  //  );
 // }
//}



const App = () => {
  const [title, setTitle] = useState("سلام دوستان عزیزم");
  const [isLight, setIsLight] = useState(false);

  const handleSetLight = () => {
    setIsLight(!isLight); // ✅ تغییر حالت روشن/تاریک
   setTitle(isLight ? "سلام دوستان عزیزم" : "به کد یاد خوش آمدید."); // ✅ تغییر متن براساس حالت
 };
//const handleSetLight = () => {
  //setIsLight(prev => {
   // const newIsLight = !prev;
   // setTitle(newIsLight ? "سلام دوستان عزیزم" : "به کد یاد خوش آمدید.");
  //  return newIsLight;
 // });
//};

  return (
    <div className='main' style={{ background: isLight ? "white" : "black", color: isLight ? "black" : "white" }}>
      <Hello title={title} color={isLight ? "black" : "white"} />
      <Timer isLight={isLight}  handleSetLight={handleSetLight} />
    </div>
  );
}


export default App;
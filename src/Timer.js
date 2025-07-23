import React from 'react';
import './style.css';
import TimeList from './TimeLis';
import { testContext } from './testContext';

let interval;

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      hour: 0,
      minute: 0,
      second: 0,
      isStart: false
    };
  }

  startInterval = () => {
    if (!this.state.isStart) {
      this.setState({ isStart: true });

      interval = setInterval(() => {
        this.setState((prevState) => {
          let { hour, minute, second } = prevState;

          second++;

          if (second === 60) {
            second = 0;
            minute++;
          }

          if (minute === 60) {
            minute = 0;
            hour++;
          }

          return { second, minute, hour };
        });
      }, 1000);
    }
  };
  static contextType=testContext;

  stopInterval = () => {
    this.setState({ isStart: false });
    clearInterval(interval);
  };

  resetInterval = () => {
    clearInterval(interval);
    this.setState({
      hour: 0,
      minute: 0,
      second: 0,
      isStart: false
    });
  };
  habdleSaveTime=()=>{
    let h =this.state.hour
    let m=this.state.minute
    let s=this.state.second
    let newTime= `${h > 9 ? h: "0"+h} : ${m > 9 ? m : "0"+m} : ${s > 9 ? s : "0"+s}`
    this.props.setTimeArr([...this.props.timeArr , newTime])
  }

  render() {
    const { hour, minute, second } = this.state;

    return (
      <>
        <h2 className='timer' onClick={this.habdleSaveTime} style={{color:this.context}}>
          {`${hour.toString().padStart(2, '0')} : ${minute.toString().padStart(2, '0')} : ${second.toString().padStart(2, '0')}`}
        </h2>

        <div className="button-group">
          <button className="circle-button start-button" onClick={this.startInterval}>Start</button>
          <button className="circle-button stop-button" onClick={this.stopInterval}>Stop</button>
          <button className="circle-button reset-button" onClick={this.resetInterval}>Reset</button>
          <button className="circle-button reset-button" onClick={this.props.handleSetLight}
           style={{background : this.props.isLight ? "black":"white" ,
           color:this.props.isLight ? "white" :"black"
           }}
          >
            {this.props.isLight ? "dark":"light"}
            
            </button>
        </div>
          <TimeList>
           {this.props.timeArr}
          </TimeList>
      </>
    );
  }
}

export default Timer;



import React from 'react';
import './style.css';

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

  render() {
    const { hour, minute, second } = this.state;

    return (
      <>
        <h2 className='timer'>
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
      </>
    );
  }
}

export default Timer;



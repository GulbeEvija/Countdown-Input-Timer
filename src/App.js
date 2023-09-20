import './App.css';
import { Component } from 'react';
import { Input } from './Input';
import { Timer } from './Timer';
import { Button } from './Button';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: '00',
      minutes: '00'
    }

    this.handleChange = this.handleChange.bind(this)
    this.startCountDown = this.startCountDown.bind(this)
    this.tick = this.tick.bind(this)
  }

  handleChange(event) {
    this.setState({
      minutes: event.target.value
    });
  }

  tick() {
    let min = Math.floor(this.secondsRemaining / 60);
    let sec = this.secondsRemaining - min * 60;
    this.setState({
      minutes: min,
      seconds: sec
    });

    if (sec < 10) {
      this.setState({
        seconds: "0" + sec,
      })
    }

    if (min < 10) {
      this.setState({
        minutes: "0" + min,
      })
    }

    if (min === 0 & sec === 0) {
      clearInterval(this.intervalHandle)
    }

    this.secondsRemaining--
  }

  startCountDown() {
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.minutes;
    this.secondsRemaining = time * 60
  }

  render() {
    return (
      <div className="App">
        <Input minutes={this.state.minutes} handleChange={this.handleChange}/>
        <Timer minutes={this.state.minutes} seconds={this.state.seconds} handleChange={this.handleChange}/>
        <Button startCountDown={this.startCountDown} minutes={this.state.minutes}/>
      </div>
    );
  }

}

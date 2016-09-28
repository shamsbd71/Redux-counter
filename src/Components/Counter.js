import React, { Component, PropTypes } from 'react';


class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: null
    };
  }

  static PropTypes = {
  	value : PropTypes.number.isRequired,
  	onIncrement : PropTypes.func.isRequired,
  	onDecrement : PropTypes.func.isRequired
  }

  incrementIfOdd = () => {
  	if( this.props.value % 2 !== 0){
  		this.props.onIncrement()
  	}
  }

  incrementIfEven = () => {
  	if( this.props.value % 2 === 0){
  		this.props.onIncrement()
  	}
  }

  incrementAsync = () => {
    if(!this.state.interval){
      let intervalID = setInterval(this.props.onIncrement, 1)
      this.setState({interval: intervalID})
    }
  }

  stopInterval = () => {
    // console.log(this.state);
    if(this.state.interval){
      clearInterval(this.state.interval)
      this.setState({interval: null})
    }
  }

  render() {
  	const { value, onIncrement, onDecrement } = this.props;

    return (
      <div>
        <blockquote>Clicked : { value } Times</blockquote>

        <button onClick={onIncrement} > + Increment </button>
        <button onClick={onDecrement} > - Decrement </button>
        <button onClick={this.incrementIfOdd.bind(this)} > + Odd Increment </button>
        <button onClick={this.incrementIfEven.bind(this)} > + Even Increment </button>
        <button onClick={this.incrementAsync.bind(this)} > + Auto Increment </button>
        <button onClick={this.stopInterval.bind(this)} > || Stop Auto Increment </button>
      </div>
    );
  }
}

export default Counter
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';

// Install redux with:
// $ npm i --save redux

const reducer = (state={ count: 0 }, action) => {

  console.log('Our reducers state: ', state);
  console.log('Our reducers action: ', action);

  switch (action.type) {
    case 'UPDATE_COUNT':
      return { count: action.count };

    // case 'INCREMENT_COUNT':
    //   return { count: state.count + 1 };

    // // increment by 3
    // case 'INCREMENT_BY_3':
    //   return { count: state.count + 3 };

    // // increment by 5
    // case 'INCREMENT_BY_5':
    //   return { count: state.count + 5 };

    case 'INCREMENT_COUNT':
      return { count: state.count + action.amount };

    // case 'DECREMENT_COUNT':
    //   return { count: state.count - 1 };

    // // decrement by 3
    // case 'DECREMENT_BY_3':
    //   return { count: state.count - 3 };

    // // decrement by 5
    // case 'DECREMENT_BY_5':
    //   return { count: state.count - 5 };

    case 'DECREMENT_COUNT':
      return { count: state.count - action.amount };

    default:
      return state;
  };

};

const lawsonsStore = createStore(reducer);
// debugger
// Get state:
// > lawsonsStore.getState()
// Update state:
// > lawsonsStore.dispatch({ type: 'INCREMENT_COUNT', amount: 3 })
// > lawsonsStore.dispatch({ type: 'DECREMENT_COUNT', amount: 4 })
// > lawsonsStore.getState()
// -1

// > lawsonsStore.dispatch({ type: 'UPDATE_COUNT', amount: 87 })
// > lawsonsStore.getState()
// 87

class App extends Component {
  // state = {
  //   count: 0
  // }

  render() {
    return (
      <div className='App'>
        <Header />
        <Counter />
      </div>
    )
  }
}

class Header extends Component {
  componentDidMount() {
    lawsonsStore.subscribe(() => this.forceUpdate())
  }

  renderDescription = () => {
    const remainder = lawsonsStore.getState().count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${lawsonsStore.getState().count + upToNext}`;
  }

  render() {
    return (
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1 className='App-title'>Welcome to React</h1>
        <h3>{this.renderDescription() }</h3>
      </header>
    )
  }
}

class Counter extends Component {
  componentDidMount() {
    lawsonsStore.subscribe(() => this.forceUpdate());
  }

  increment = () => {
    // this.setState({ count: this.state.count + 1 });
    lawsonsStore.dispatch({ type: 'INCREMENT_COUNT', amount: 1 });
  }

  decrement = () => {
    // this.setState({ count: this.state.count - 1 });
    lawsonsStore.dispatch({ type: 'DECREMENT_COUNT', amount: 1 });
  }

  render() {
    return (
      <div className='Counter'>
        <h1>{lawsonsStore.getState().count}</h1>
        <button onClick={this.decrement}> - </button>
        <button onClick={this.increment}> + </button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
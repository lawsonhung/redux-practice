import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Counter from './Counter.js';

export default class App extends Component {
  // state = {
  //   count: 0
  // }

  render() {
    return (
      <div className='App'>
        <Header headerProps='Header props goes here'/>
        <Counter />
      </div>
    )
  }
}

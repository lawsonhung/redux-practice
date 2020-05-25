import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {

  increment = () => {
    // this.setState({ count: this.state.count + 1 });
    // lawsonsStore.dispatch({ type: 'INCREMENT_COUNT', amount: 1 });
  }

  decrement = () => {
    // this.setState({ count: this.state.count - 1 });
    // lawsonsStore.dispatch({ type: 'DECREMENT_COUNT', amount: 1 });
  }

  render() {

    console.log("Counter props: ", this.props);

    return (
      <div className='Counter'>
        <h1>{this.props.count}</h1>
        <button onClick={this.props.decrementCount}> - </button>
        <button onClick={this.props.incrementCount}> + </button>
      </div>
    )
  }
}

// Select the props you want to insert from store into props
const mapStateToProps = (store) => {
  return {
    count: store.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    decrementCount: () => {
      dispatch({ type: 'DECREMENT_COUNT', amount: 1 })
    },
    incrementCount: () => {
      dispatch({ type: 'INCREMENT_COUNT', amount: 1 })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';

class Header extends Component {

  renderDescription = () => {
    const remainder = this.props.count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${this.props.count + upToNext}`;
  }

  render() {
    
    // console.log('Header props: ', this.props);

    return (
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1 className='App-title'>Welcome to React</h1>
        <h3>{this.renderDescription() }</h3>
      </header>
    );
  }
}

// Gets state
// Adds it to props
const mapStateToProps = (store) => {
  console.log('redux store: ', store);

  // The key-values/object to add to props
  return {
    count: store.count
  }
}

// Updates store/state
// const mapDispatchToProps = (dispatch) => {
//   console.log('dispatch: ', dispatch);

//   return {
//     increaseCount: () => {
//       dispatch({ type: 'INCREMENT_COUNT', amount: 1 });
//     }
//   }
// }

export default connect(mapStateToProps, null)(Header)
// export default connect(mapStateToProps, mapDispatchToProps)(Header)
// connect(redux)(React Component)


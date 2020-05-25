
export default (state={ count: 0 }, action) => {

  // console.log('Our reducers state: ', state);
  // console.log('Our reducers action: ', action);

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

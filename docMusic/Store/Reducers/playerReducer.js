const initialState = { 
    play: null,
  };
  
  function playerReducer(state = initialState, action) {
      let nextState
      switch (action.type) {
        case 'SET_PLAY':
          nextState = {
              ...state,
              play: action.status,
          }
          return nextState
      default:
        return state
      }
    }
  
  export default playerReducer;
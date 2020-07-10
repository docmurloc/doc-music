const initialState = { 
    play: null,
    loop: null,
    random: null
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
        case 'SET_LOOP':
          nextState = {
              ...state,
              loop: action.status,
          }
          return nextState
        case 'SET_RANDOM':
          nextState = {
              ...state,
              random: action.status,
          }
          return nextState
      default:
        return state
      }
    }
  
  export default playerReducer;
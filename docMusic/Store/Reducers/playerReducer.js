const initialState = { 
    play: null,
    loop: null,
    random: null,
    favorite : null,
    unfavorite : null,
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
        case 'SET_FAVORITE_PLAYER':
          nextState = {
              ...state,
              favorite: action.status,
          }
          return nextState
        case 'SET_UNFAVORITE_PLAYER':
          nextState = {
              ...state,
              unfavorite: action.status,
          }
          return nextState
      default:
        return state
      }
    }
  
  export default playerReducer;
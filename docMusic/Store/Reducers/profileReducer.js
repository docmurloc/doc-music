
const initialState = { 
  access_token: null,
  trackHistoric: [],
  trackFavorite: [],
  trackUnfavorite :[]
};

function idFilterRemover(List, id) {
  return List.filter(
      function(data) {
          return data != id
      }
  )
}

function profileReducer(state = initialState, action) {

  //if (action.type == "ADD_FAVORITE") {
  //  console.log("profile reducer state", state);
  //  console.log("profile reducer action", action);
  //}
  let nextState;
    switch (action.type) {
      case 'CONNECTION':
        nextState = {
            ...state,
            access_token: action.accessToken,
        }
        return nextState
      case 'SET_HISTORIC':
        nextState = {
            ...state,
            trackHistoric: action.trackHistoric,
        }
        return nextState
      case 'ADD_HISTORIC':
        nextState = {
            ...state,
            trackHistoric: [action.trackId, ...state.trackHistoric],
        }
        return nextState
      case 'SET_FAVORITE':
        nextState = {
            ...state,
            trackFavorite: action.trackFavorite,
        }
        //console.log("state after set favorite", nextState);
        return nextState
      case 'ADD_FAVORITE':
        nextState = {
            ...state,
            trackFavorite: [action.trackId, ...state.trackFavorite],
        }
        return nextState
      case 'REM_FAVORITE':
        nextState = {
            ...state,
            trackFavorite: idFilterRemover(state.trackFavorite, action.trackId),
        }
        return nextState
      case 'SET_UNFAVORITE':
        nextState = {
            ...state,
            trackUnfavorite: action.trackUnfavorite,
        }
        return nextState
      case 'ADD_UNFAVORITE':
        nextState = {
            ...state,
            trackUnfavorite: [action.trackId, ...state.trackUnfavorite],
        }
        return nextState
      case 'REM_UNFAVORITE':
        nextState = {
            ...state,
            trackUnfavorite: idFilterRemover(state.trackUnfavorite, action.trackId),
        }
        return nextState
    default:
      return state
    }
  }

export default profileReducer;
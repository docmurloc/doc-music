const initialState = { 
  access_token: null,
  trackHistoric: [],
  trackFavorite: [],
  trackUnfavorite :[]
};

function profileReducer(state = initialState, action) {
    let nextState
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
            trackHistoric: action.trackId,
        }
        return nextState
      case 'SET_FAVORITE':
        nextState = {
            ...state,
            trackFavorite: action.trackFavorite,
        }
        return nextState
      case 'ADD_FAVORITE':
        nextState = {
            ...state,
            trackFavorite: action.trackId,
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
            trackUnfavorite: action.trackId,
        }
        return nextState
    default:
      return state
    }
  }

export default profileReducer;
const initialState = { 
  access_token: null,
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
    default:
      return state
    }
  }

export default profileReducer;
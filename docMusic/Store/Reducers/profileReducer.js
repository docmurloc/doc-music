const initialState = { 
  access_token: null,
  refresh_token: null,
  expires_in: null,
  account_username: null,
  account_id: null
};

function profileReducer(state = initialState, action) {
    let nextState
    switch (action.type) {
      case 'CONNECTION':
        nextState = {
            ...state,
            access_token: action.accessToken,
            refresh_token: action.refreshToken,
            expires_in: action.expiresIn,
            account_username: action.username,
            account_id: action.accountId
        }
        return nextState
    default:
      return state
    }
  }

export default profileReducer;
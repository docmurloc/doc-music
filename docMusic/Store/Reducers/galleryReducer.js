const initialState = {
    gallery : null
};

function galleryReducer(state = initialState, action) {
    let nextState
    switch (action.type) {
      case 'SET_GALLERY':
        nextState = {
            ...state,
            gallery: action.value
        }
        return nextState
    default:
      return state
    }
  }

export default galleryReducer;
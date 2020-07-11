const exempleAlbume = {
    id : 1,
    title: "title",
    artist: "artist",
    artwork: "URL artwork",
    date: "date",
    genre: "genre",
    trackListId: [111, 222, 333, 444],
}

const initialState = {
    albumIdList: [],
    albumList: [],
  };
  
  function albumReducer(state = initialState, action) {
      let nextState
      switch (action.type) {
        case 'ADD_ALBUM':
          nextState = {
              ...state,
              albumIdList: [...state.albumIdList, action.album.id],
              albumList: [...state.albumList, action.album],
          }
          return nextState
      default:
        return state
      }
    }
  
  export default albumReducer;
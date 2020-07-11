const exemplePlaylist = {
    id : "playlist._id",
    title: "playlist.title",
    author: "playlist.author",
    date: "playlist.date",
    artwork: "playlist.artwork",
    trackListId: "playlist.trackListId",
};

const initialState = {
    currentPlaylist: null,
    playlistId: [], 
    playlistCache: [],
  };

  function playlistReducer(state = initialState, action) {
      let nextState
      switch (action.type) {
        case 'ADD_PLAYLIST':
          nextState = {
              ...state,
              playlistId: [...state.playlistId, action.playlist.id],
              playlistCache: [...state.playlistCache, action.playlist],
          }
          return nextState
        case 'SET_CURRENT_PLAYLIST':
            nextState = {
                ...state,
                currentPlaylist: action.playlist
            }
            return nextState
      default:
        return state
      }
    }

export default playlistReducer;
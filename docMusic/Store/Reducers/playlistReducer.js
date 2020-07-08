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

function playlistFilter(imageList, id) {
    return imageList.filter(
        function(data) {
            return data == id
        }
    )
}

  function playlistReducer(state = initialState, action) {
      let nextState
      switch (action.type) {
        case 'ADD_PLAYLIST':

            let found = playlistFilter(state.playlistId, action.playlist.id)
            if (found) {
                return state
            }
          nextState = {
              ...state,
              imageId: [...state.imageId, action.image.id],
              imageCache: [...state.imageCache, action.image],
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
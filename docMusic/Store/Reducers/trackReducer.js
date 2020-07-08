const exempleTrack = {
    id : "track._id",
    title: "track.title",
    artist: "track.artist",
    album: "track.album",
    genre: "track.genre",
    date: "track.date",
    artwork: "track.artwork",
    url: "track.url",
};

const initialState = {
    currentTrack: null,
    trackId: [], 
    trackCache: [],
  };

function trackFilter(imageList, id) {
    return imageList.filter(
        function(data) {
            return data == id
        }
    )
}

  function trackReducer(state = initialState, action) {
      let nextState
      switch (action.type) {
        case 'ADD_TRACK':

            let found = trackFilter(state.trackId, action.track.id)
            if (found) {
                return state
            }
          nextState = {
              ...state,
              trackId: [...state.trackId, action.track.id],
              trackCache: [...state.trackCache, action.track],
          }
          return nextState
        case 'SET_CURRENT_TRACK':
            nextState = {
                ...state,
                currentTrack: action.track
            }
            return nextState
      default:
        return state
      }
    }

export default trackReducer;
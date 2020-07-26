
import AsyncStorage from '@react-native-community/async-storage';

const initialState = { 
  access_token: null,
  trackHistoric: [],
  trackFavorite: [],
  trackUnfavorite :[],
  albumFavorite: []
};

const storeProfile = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('cache_profile', jsonValue)
  } catch (e) {
    console.log("echec store profile ", e);
  }
}

const deleteProfile = async () => {
  try {
    await AsyncStorage.removeItem('cache_profile')
  } catch (e) {
    console.log("echec delete profile ", e);
  }
}

function idFilterRemover(List, id) {
  return List.filter(
      function(data) {
          return data != id
      }
  )
}

function profileReducer(state = initialState, action) {

  //if (action.type == "ADD_ALBUM_FAVORITE") {
  //  console.log("profile reducer state", state);
  //  console.log("profile reducer action", action);
  //  console.log("profile albumFavorite", state.albumFavorite);
  //}
  let nextState;
    switch (action.type) {
      case 'CONNECTION':
        nextState = {
            ...state,
            access_token: action.accessToken,
        }
        storeProfile(nextState);
        return nextState
      case 'SET_HISTORIC':
        nextState = {
            ...state,
            trackHistoric: action.trackHistoric,
        }
        storeProfile(nextState);
        return nextState
      case 'ADD_HISTORIC':
        nextState = {
            ...state,
            trackHistoric: [action.trackId, ...idFilterRemover(state.trackHistoric, action.trackId)],
        }
        storeProfile(nextState);
        return nextState
      case 'SET_FAVORITE':
        nextState = {
            ...state,
            trackFavorite: action.trackFavorite,
        }
        storeProfile(nextState);
        //console.log("state after set favorite", nextState);
        return nextState
      case 'ADD_FAVORITE':
        nextState = {
            ...state,
            trackFavorite: [action.trackId, ...state.trackFavorite],
        }
        storeProfile(nextState);
        return nextState
      case 'REM_FAVORITE':
        nextState = {
            ...state,
            trackFavorite: idFilterRemover(state.trackFavorite, action.trackId),
        }
        storeProfile(nextState);
        return nextState
      case 'SET_UNFAVORITE':
        nextState = {
            ...state,
            trackUnfavorite: action.trackUnfavorite,
        }
        storeProfile(nextState);
        return nextState
      case 'ADD_UNFAVORITE':
        nextState = {
            ...state,
            trackUnfavorite: [action.trackId, ...state.trackUnfavorite],
        }
        storeProfile(nextState);
        return nextState
      case 'REM_UNFAVORITE':
        nextState = {
            ...state,
            trackUnfavorite: idFilterRemover(state.trackUnfavorite, action.trackId),
        }
        storeProfile(nextState);
        return nextState
        case 'SET_ALBUM_FAVORITE':
        nextState = {
            ...state,
            albumFavorite: action.albumFavorite,
        }
        storeProfile(nextState);
        //console.log("profile albumFavorite result", nextState);
        return nextState
      case 'ADD_ALBUM_FAVORITE':
        nextState = {
            ...state,
            albumFavorite: [action.trackId, ...state.albumFavorite],
        }
        storeProfile(nextState);
        return nextState
      case 'REM_ALBUM_FAVORITE':
        nextState = {
            ...state,
            albumFavorite: idFilterRemover(state.albumFavorite, action.trackId),
        }
        storeProfile(nextState);      
        return nextState
      case 'REHYDRATE_PROFILE':
        nextState = {
            ...state,
            ...action.profile,
        }
        return nextState
      case 'CLEAN_PROFILE':
        deleteProfile();
        return initialState;
    default:
      return state
    }
  }

export default profileReducer;
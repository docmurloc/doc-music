import { createStore , combineReducers} from 'redux';
import profileReducer from './Reducers/profileReducer'
import galleryReducer from './Reducers/galleryReducer'
import albumReducer from './Reducers/albumReducer'
import imageReducer from './Reducers/imageReducer'
import playlistReducer from './Reducers/playlistReducer'
import trackReducer from './Reducers/trackReducer'

const rootReducer = combineReducers({
    profil: profileReducer,
    gallery: galleryReducer,
    album : albumReducer,
    image : imageReducer,
    playlist : playlistReducer,
    track : trackReducer
})

export default createStore(rootReducer)
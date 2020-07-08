import { createStore , combineReducers} from 'redux';
import profileReducer from './Reducers/profileReducer'
import galleryReducer from './Reducers/galleryReducer'
import albumReducer from './Reducers/albumReducer'
import imageReducer from './Reducers/imageReducer'

const rootReducer = combineReducers({
    profil: profileReducer,
    gallery: galleryReducer,
    album : albumReducer,
    image : imageReducer,
})

export default createStore(rootReducer)
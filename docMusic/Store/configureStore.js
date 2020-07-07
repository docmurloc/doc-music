import { createStore , combineReducers} from 'redux';
import profileReducer from './Reducers/profileReducer'
import galleryReducer from './Reducers/galleryReducer'
import albumReducer from './Reducers/albumReducer'

const rootReducer = combineReducers({
    profil: profileReducer,
    gallery: galleryReducer,
    album : albumReducer,
})

export default createStore(rootReducer)
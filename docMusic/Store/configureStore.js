import { createStore , combineReducers} from 'redux';
import profileReducer from './Reducers/profileReducer'
import galleryReducer from './Reducers/galleryReducer'

const rootReducer = combineReducers({
    profil: profileReducer,
    gallery: galleryReducer
})

export default createStore(rootReducer)
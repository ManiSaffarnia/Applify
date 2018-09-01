import {createStore, combineReducers} from 'redux';
import favoriteAlbumReducers from '../reducers/favoriteAlbumReducers';
import filterReducers from "../reducers/filterReducers";
import searchAlbumReducer from '../reducers/searchAlbumReducer';
export default () => {
    const store = createStore(combineReducers({
        albums: favoriteAlbumReducers,
        filters: filterReducers,
        search: searchAlbumReducer
    }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store
}

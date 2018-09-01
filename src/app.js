import React from 'react';
import ReactDOM from 'react-dom';
import AppRouters from './routers/AppRouters';
import configStore from './store/storeConfig';
import {Provider} from 'react-redux';
import {addFavoriteAlbum} from './actions/favAlbumActions';
import visibleAlbum from './selectors/albumsSelector';
import {setText,sortByArtistName} from  './actions/filterActions';
import 'normalize.css/normalize.css';
import 'bootstrap/scss/bootstrap.scss';
import './styles/style.scss';



const store = configStore();

const jsx = (
    <Provider store={store}>
        <AppRouters/>
    </Provider>
);



ReactDOM.render(jsx, document.getElementById('app'));


import React from 'react';

const favoriteAlbumDefaultStat = [];

const favoriteAlbumReducers = (state = favoriteAlbumDefaultStat, action) => {
    switch (action.type){
        case 'ADD_ALBUM':
            return [...state,action.album];
        case 'REMOVE_ALBUM':
            return state.filter((album) => {
                //console.log(album.collectionId);
                //console.log(action.id);
                return (album.collectionId !== action.id);
            });
        default:
            return state
    }
};

export default favoriteAlbumReducers;
import uuid from 'uuid';
import moment from 'moment';

export const addFavoriteAlbum = ( album = {}) => ({
    type: 'ADD_ALBUM',
    album: {
        id: uuid(),
        artistId: album.artistId,
        artistName: album.artistName,
        artistViewUrl: album.artistViewUrl,
        artworkUrl60: album.artworkUrl60,
        artworkUrl100: album.artworkUrl100,
        collectionId: album.collectionId,
        collectionName: album.collectionName,
        collectionPrice: album.collectionPrice,
        collectionViewUrl: album.collectionViewUrl,
        copyright: album.copyright,
        releaseDate:album.releaseDate,
        trackCount: album.trackCount,
        primaryGenreName: album.primaryGenreName,
        createdAt: moment()

    }
});


export const removeFavoriteAlbum = ({id} = {}) => ({
    type: 'REMOVE_ALBUM',
    id
});




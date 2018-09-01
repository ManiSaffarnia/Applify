import React from 'react';
import {connect} from 'react-redux';
import FavoriteAlbumListItem from './FavoriteAlbumListItem';
import SearchAlbum from './SearchAlbum';
import visibleAlbum from '../selectors/albumsSelector'
const FavoriteAlbumList = (props) => {
  //console.log(props);
    return (
        <div>
            <div className="container">
                <h4 className="fav-header">Your Favorite Album List</h4>
                <hr className="line-black"/>
                <SearchAlbum isFilter={true} />



            </div>
            <div className="search-container">
                {props.albums.map((album)=>{
                        return(<FavoriteAlbumListItem album={album} key={album.id} isFavorite={true}/>);
                    }
                )}
            </div>
        </div>
  );
};

const mapStateToProps = (state) => {
    return ({
        albums: visibleAlbum(state.albums,state.filters)
    })
};

export default connect(mapStateToProps)(FavoriteAlbumList);
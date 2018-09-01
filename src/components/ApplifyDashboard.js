import React from 'react';
import SearchAlbum from './SearchAlbum';
import FavoriteAlbumListItem from './FavoriteAlbumListItem';
import {connect} from 'react-redux';
const ApplifyDashboard = (props) => {
    return (
        <div className="search">
            <div className="container">
                <h2 className="search-header">Search Your Favorite Music</h2>
                <hr className="line-black"/>
                <SearchAlbum/>
            </div>

            <div className="search-container">
                {props.search.searchResult.map((album)=>{
                    return (
                        <FavoriteAlbumListItem album={album} key={album.collectionId} placeholder={"Search..."}/>
                    );
                })}
            </div>
        </div>
    );
};
const mapStateToProps = (state)=>({
    search: state.search
});
export default connect(mapStateToProps)(ApplifyDashboard);
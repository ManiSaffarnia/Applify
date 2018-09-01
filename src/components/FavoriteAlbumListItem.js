import React from 'react';
import {connect} from 'react-redux';
import {addFavoriteAlbum,removeFavoriteAlbum} from '../actions/favAlbumActions';

class FavoriteAlbumListItem extends React.Component{
    constructor(props){
        super(props);
    }

    onAddButtonClicked = ()=>{
        //console.log('add');
        const albumID = document.getElementById(this.props.album.collectionId).value;
        const selectedAlbum = this.props.search.searchResult.filter((album)=>{
            return album.collectionId === parseInt(albumID);
        });
        //check its not repetetive
        this.props.dispatch(addFavoriteAlbum(selectedAlbum[0]));
    };

    onRemoveButtonClicked = (e)=>{
        //console.log('remove');
        //console.log(this.props.album);
        const albumID = parseInt(document.getElementById(this.props.album.collectionId).value);
        this.props.dispatch(removeFavoriteAlbum({id: albumID}));
    };

    checkExistance = (album)=>{
        return this.props.albums.find((eachalbum)=>{
            return (eachalbum.collectionId === album.collectionId ? eachalbum:'');
        })
    };

    render(){

        const isExist = this.checkExistance(this.props.album);
        return(
            <div className = "card-container">
                <div className = "custom-card">
                    <div className = "card-left-side">
                        <div className = "card-image">
                            <img className="card-img-top" src={this.props.album.artworkUrl100} alt="Card image cap"/>
                        </div>
                        <div className="card-sub-image">
                            <small>{this.props.album.trackCount}Song, {this.props.album.collectionPrice}$</small>
                            <a href={this.props.album.collectionViewUrl} target="_blank">Preview </a>
                        </div>
                    </div>
                    <div className="card-right-side">
                        <div className="card-information">
                            <div className="card-infoo">
                                <h3>{this.props.album.collectionName}</h3>
                                <a href={this.props.album.artistViewUrl} target="_blank">Artist: {this.props.album.artistName}</a>
                                <p>{this.props.album.primaryGenreName}rock/2018</p>
                            </div>
                            <input id={this.props.album.collectionId} type="hidden" value={this.props.album.collectionId}/>
                            {(!isExist) && <button onClick={this.onAddButtonClicked}>Add to favorite</button>}
                            {(this.props.isFavorite || isExist)&& <button onClick={this.onRemoveButtonClicked}>Remove</button>}
                            <br/>
                            <small>release date: {this.props.album.releaseDate}</small>
                            <br/>
                                <small>{this.props.album.copyright}</small>
                        </div>
                    </div>
                </div>
                <br className="celear-fix"/>
            </div>
    );
    }
    }


    const mapStateToProps = (state)=>({
        search: state.search,
        albums: state.albums,
    });

    export default connect(mapStateToProps)(FavoriteAlbumListItem);
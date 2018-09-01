
const searchReducerDefaultState = {
    searchText: '',
    searchResult:[]
};


const searchAlbumReducer = (state=searchReducerDefaultState, action) => {
    switch (action.type){
        case 'SET_SEARCH_TEXT':
            return ({
                ...state,
                searchText:action.searchText
            });
        case 'SET_SEARCH_RESULT':
            return({
                ...state,
                searchResult: action.albums
            });
        case 'RESET_SEARCH_RESULT':
            return({
                ...state,
                searchResult: []
            });
        default:
            return state;
    }
};

export default searchAlbumReducer;

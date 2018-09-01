 export const setSearchText = (searchText = '') => ({
     type: 'SET_SEARCH_TEXT',
     searchText
 });

export const setSearchResult = (albums = [])=> ({
    type: 'SET_SEARCH_RESULT',
    albums
});

export const resetSearchResult = () => ({
    type: 'RESET_SEARCH_RESULT'
});


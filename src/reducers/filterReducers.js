import moment from 'moment';

const filterReducerDefaultState = {
  text: '',
  sortBy: 'date', //date, artist, album
  startDate: undefined,
  endDate: undefined
};

const filterReducers = (state=filterReducerDefaultState, action) => {
    switch (action.type){
        case 'SET_FILTER_TEXT':
            return ({
                ...state,
                text:action.text
            });
        case 'SET_SEARCH_TEXT':
            return ({
                ...state,
                search:action.text
            });
        case 'SET_START_DATE':
            return ({
                ...state,
                startDate: action.startDate
            });
        case 'SET_END_DATE':
            return ({
                ...state,
                endDate: action.endDate
            });
        case 'SORT_BY_DATE':
            return({
                ...state,
                sortBy: 'date'
            });
        case 'SORT_BY_ARTIST_NAME':
            return({
                ...state,
                sortBy: 'artist'
            });
        case 'SORT_BY_ALBUM_NAME':
            return({
                ...state,
                sortBy: 'album'
            });
        default:
            return state;
    }
};

export default filterReducers;

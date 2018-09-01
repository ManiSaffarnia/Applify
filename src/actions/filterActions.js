
export const setText = (text = '') => ({
    type: 'SET_FILTER_TEXT',
    text
});

export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

export const sortByDate = ()=>({
    type: 'SORT_BY_DATE',
});

export const sortByArtistName = ()=>({
    type: 'SORT_BY_ARTIST_NAME',
});
export const sortByAlbumName = ()=>({
    type: 'SORT_BY_ALBUM_NAME',
});
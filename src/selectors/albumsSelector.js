import moment from 'moment';

const visibleAlbum = (albums, {text, sortBy, startDate, endDate}) => {
    return albums.filter((album)=>{
        const createdAtMoment = moment(album.createdAt);
        const textMatch = album.collectionName.toLowerCase().includes(text.toLowerCase()) || album.artistName.toLowerCase().includes(text.toLowerCase());
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day'): true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day'): true;
        return textMatch && startDateMatch && endDateMatch;
    });
};

export default visibleAlbum;
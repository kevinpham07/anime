import kitsu from '../apis/kitsu';
import convertGenres from '../hooks/convertGenres';

export const getAnimes = ({pageLimit, aScore, aGenres}) => async (dispatch) => {
    const FILTER = '&filter'
    const page = `page[limit]=${pageLimit}`
    const score = `${FILTER}[averageRating]=${aScore}..`
    let genres;

    if (aGenres) {
        const gFilter = convertGenres(aGenres);
        if (gFilter.length > 0) {
            genres = `${FILTER}[categories]=${gFilter.join(',')}`
        }
    }


    let baseOffset = 16000;
    let decrement = 4000;

    switch (aScore) {
        case 60:
            baseOffset = 8000;
            decrement = 2000;
            break;

        case 65:
            baseOffset = 6300;
            decrement = 1575;
            break;

        case 70:
            baseOffset = 3900;
            decrement = 975;
            break;

        case 75:
            baseOffset = 1700;
            decrement = 425;
            break;

        case 80:
            baseOffset = 600;
            decrement = 150;
            break;

        case 85:
            baseOffset = 0
            decrement = 0;
            break;

        default:
            break;

    }
    
    let offset = Math.floor(Math.random() * baseOffset);
    let res = await kitsu.get(`?${page}&page[offset]=${offset}${aScore ? score : ''}${genres && genres.length > 0 ? genres : ''}`);
    while (res.data.data.length < 1) {
        console.log('in the while loop')
        baseOffset -= decrement;
        offset = Math.floor(Math.random() * baseOffset);
        if (offset < 0) {
            return console.log('No matching animes')
        }
        console.log(offset);
        res = await kitsu.get(`?${page}&page[offset]=${offset}${aScore ? score : ''}${genres && genres.length > 0 ? genres : ''}`);
    }
    dispatch({
        type: 'GET_ANIMES',
        payload: res.data.data
    });
};


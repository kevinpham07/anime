export default (state = [], action) => {
    switch (action.type) {
        case 'GET_ANIMES':
            return [...action.payload];

        default:
            return state;
    };
};
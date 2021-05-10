import { useQuery, gql } from '@apollo/client';

const useGenres = (title) => {
    const GET_ANIMES = gql`
        query {
            Media (type: ANIME, search: "${title}") {
                title {
                    romaji
                }
                genres
            }
        }
    `

    const {loading, error, data} = useQuery(GET_ANIMES)
    if (loading) {
        return;
    }
    if (error) {
        return;
    }
    if (data) {
        return data.Media.genres;
    }
}

export default useGenres;
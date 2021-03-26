const convertGenres = (genres) => {
    const newGenres = genres.filter((genre) => genre.status)
    return newGenres.map( (genre) => genre.input )
}

export default convertGenres;
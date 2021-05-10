import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAnimes } from '../actions';

import AnimeDetail from './AnimeDetail';
import Filters from './Filters';
import users from '../apis/users';

const AnimeList = (props) => {

    useEffect( () => {
        
        props.getAnimes({pageLimit: 3});
    
    }, []);

    const renderedItems = props.animes.map( (anime) => {
        const { averageRating, posterImage, description, titles, episodeCount, status, ageRating } = anime.attributes;

        return (
            <div key={ anime.id }>
                <AnimeDetail
                    id={ anime.id }
                    score={ averageRating }
                    image={ posterImage.large }
                    description={ description }
                    title={ titles }
                    episodes={ episodeCount }
                    status={ status }
                    rating={ ageRating }
                />
            </div>
        )
    })

    return (
        <div>
            <div>
                <Filters 
                    submit={ props.getAnimes }
                />
            </div>
            <div id="anime-container">
                { renderedItems }
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        animes: state.animes
    };
};

export default connect(mapStateToProps, { getAnimes })(AnimeList);
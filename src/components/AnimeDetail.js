import React from 'react';

import useGenres from '../hooks/useGenres';

const AnimeDetail = (props) => {
    const { image, description, title, episodes, status, score } = props;
    
    const genres = useGenres(title.en_jp);

    return (
        <div id="card">
            <img id="image" src={ image } alt="Cover" />
            <div id="content-container">
                <div id="content">
                    { title.en_jp
                        ? <div id="header">{ title.en_jp }</div>
                        : <div id="header">TBD</div>
                    }
                    <div id="meta">
                        { title.en
                            ? <p>Alternative title: { title.en }</p>
                            : <p>No alternative title</p>
                        }
                        { genres && genres.length >= 1
                            ? <p>{ genres.join(', ') }</p>
                            : <p>TBD</p> 
                        }
                        <p>Episodes: { episodes }</p>
                    </div>
                    { description
                        ? <div id="description">{ description }</div>
                        : <div id="description">No description</div>
                    }
                </div>
                <div id="extra">
                    { score
                        ? <span>SCORE: { Math.floor(score) }</span>
                        : <span>NO SCORE</span>
                    }
                    <span>{ status.toUpperCase() }</span>
                </div>
            </div>
        </div>
    )
}

export default AnimeDetail;
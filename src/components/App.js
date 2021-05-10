import React from 'react';
import { Route, Router } from 'react-router-dom';
import history from '../history';

import Header from './Header';
import AnimeList from './AnimeList';

const App = () => {
    return (
        <div>
            <Router history={ history }>
                <Header />
                <Route path="/" exact component={ AnimeList } />
            </Router>
        </div>
    );
};

export default App;
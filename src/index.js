import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

import { ApolloProvider } from '@apollo/client'
import aniList from './apis/aniList';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={ store }>
        <ApolloProvider client={ aniList }>
            <App />
        </ApolloProvider>
    </Provider>,
    document.querySelector('#root')
);
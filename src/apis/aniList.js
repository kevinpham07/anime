import { ApolloClient, InMemoryCache } from '@apollo/client';

const aniList = new ApolloClient({
    uri: 'https://graphql.anilist.co',
    cache: new InMemoryCache()
});

export default aniList;
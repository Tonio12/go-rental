import { ApolloClient, InMemoryCache } from '@apollo/client'

const createApolloClient = new ApolloClient({
  uri: process.env.GRAPHQL_URI || 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
})

export default createApolloClient

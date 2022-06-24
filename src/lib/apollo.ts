import { ApolloClient, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ptcoyf2mei01w7e1mgbevj/master',
  cache: new InMemoryCache()
})
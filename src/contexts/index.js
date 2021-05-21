import React from 'react';
import PropTypes from 'prop-types';
import { createHttpLink } from 'apollo-link-http';
import AppContextProvider, { AppContext } from './app';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import { offsetLimitPagination } from '@apollo/client/utilities';
import fetch from 'node-fetch';

const client = new ApolloClient({
  link: createHttpLink({
    uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
    fetch: fetch,
  }),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          pokemons: {
            results: offsetLimitPagination(),
          }
        },
      },
    },
  })
});

export { AppContext };
export default function ContextProvider({ children }) {
  return (
    <ApolloProvider client={client}>
      <AppContextProvider>
        {children}
      </AppContextProvider>
    </ApolloProvider>
  );
}

ContextProvider.defaultProps = {
  children: null,
};

ContextProvider.propTypes = {
  children: PropTypes.node,
};

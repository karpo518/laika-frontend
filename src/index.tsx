import './wdyr'; // <--- first import

import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import App from './App';

const client = new ApolloClient({
  uri: process.env.WP_API_URL,
  cache: new InMemoryCache(),
});

const rootElement = document.getElementById('root')
const root = rootElement ? ReactDOM.createRoot(rootElement) : null;


root?.render(
/*   <React.StrictMode> */
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
/*   </React.StrictMode> */
);
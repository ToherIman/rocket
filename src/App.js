import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from '@apollo/react-hooks';
import logo from "./logo.svg"
import "./App.css"
import HelloQuery from "./helloQuery";

const client = new ApolloClient({
  uri: process.env.NODE_ENV === 'development'
  ? 'http://localhost:9000/.netlify/functions/graphql'
  : '/.netlify/functions/graphql'
});

function App () {
  return (
    <ApolloProvider client={client}>  
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <HelloQuery/>
        </header>
      </div>
    </ApolloProvider>
  )
}

export default App

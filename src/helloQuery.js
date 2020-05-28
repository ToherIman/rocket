import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";

const HELLO = gql`
query hello 
  {
    hello
  }`;


function HelloQuery () {
  const { loading, error, data } = useQuery(HELLO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <p>
      {data.hello}
    </p>
  )
}

export default HelloQuery;
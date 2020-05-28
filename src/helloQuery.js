import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";

const HELLO = gql`
query user 
  { users {
    _id
    name
    email
  }
}`;


function HelloQuery () {
  const { loading, error, data } = useQuery(HELLO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log('data', data)
  return (
    data.users.map((u, i) => 
    <div key={i}>
      {u._id}
    </div>
    )
  )
}

export default HelloQuery;
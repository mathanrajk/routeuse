import React from 'react'
import { useLoaderData } from 'react-router-dom';
const User = () => {
const current = useLoaderData();
  return (
    <div>
        <h1>User Details</h1>
        <p>User name :  {current.name}</p>
        <p>User email :  {current.email}</p>
    </div>
  )
}

export default User
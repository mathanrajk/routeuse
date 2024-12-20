import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Cards from '../components/Cards';

const UsersPage = () => {
    const userData = useLoaderData();
    console.log(userData)
  return (
    <div>{
        userData.map((user)=>{
            return  <Cards key={user.id} name={user.name} mail={user.email} id={user.id.toString()}/>
        })
        }</div>
  )
}

export default UsersPage
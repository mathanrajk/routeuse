import React from 'react'
import { Outlet } from 'react-router-dom'

const Userlayout = () => {
  return (
    <div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, laboriosam!</p>
        <Outlet/>
    </div>
  )
}

export default Userlayout
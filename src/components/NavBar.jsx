import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import "./NavBar.css"
function NavBar() {
  const navigator =  useNavigate();
  return (
    <div className='main_containter'>
        <div>Company Name</div>
       <ul>
        <NavLink to={'/'}>
        <li>Home</li>
        </NavLink>
        <NavLink to={'/product'}>
        <li>Product</li>
        </NavLink>
        <NavLink to={'/about'}>
        <li>About</li>
        </NavLink>
        <NavLink to={'/contact'}>
        <li>Contact</li>
        </NavLink>
        <NavLink to={'/user'}>
        <li>Users</li>
        </NavLink>
       </ul>
       <button onClick={()=>navigator("/login",{replace:true})}>Login</button>
      
    </div>
  )
}

export default NavBar

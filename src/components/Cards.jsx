import React from 'react'
import './Cards.css'
import { Link } from 'react-router-dom'
const Cards = ({name,mail,id}) => {
  return (
    <div className='main_cards' >
        <Link to={id}>
        <p>{name}</p>
        <p>{mail}</p>
        </Link>
        
    </div>
  )
}

export default Cards
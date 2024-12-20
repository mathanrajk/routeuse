import React from 'react'
import { useNavigate } from 'react-router-dom'

function ContactPage() {
  const navigator =useNavigate();
  return (
    <div>
      <h1>contact page</h1>
      <button className='click' onClick={()=>navigator("info")}> info</button>
      <button className='click'  onClick={()=>navigator('forms')}>forms</button>
    </div>
  )
}

export default ContactPage

import React from 'react'
import ContactPage from '../pages/ContactPage'
import { Outlet } from 'react-router-dom'

const ContactLayout = () => {
  return (
    <div>
        <ContactPage/>
        <Outlet/>
    </div>
  )
}

export default ContactLayout
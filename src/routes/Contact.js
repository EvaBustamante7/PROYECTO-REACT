import React from 'react'
import Navbar from '../componentes/Navbar'
import Footer from '../componentes/Footer'
import BgImage from '../componentes/BgImage'
import Form from '../componentes/Form'

const Contact = () => {
  return (
    <div>
        <Navbar />
        <BgImage 
        heading='CONTACT'
        text='Habla con nosotros' />
        <Form />
        <Footer />
    </div>
  )
}

export default Contact
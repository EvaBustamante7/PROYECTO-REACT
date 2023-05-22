
import React from 'react'
import './Video.css'
import {Link} from 'react-router-dom'
import spaceVideo from '../img/nebulosa.mp4'

const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={spaceVideo} type='video/mp4'></source>
        </video>
        <div className='content'>
            <h1>Explora</h1>
            <p>Descubre los misterios del universo</p>
            <div>
            <Link to='/planets' className='btn'>Planets</Link>
            <Link to='/contact' className='btn btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Video






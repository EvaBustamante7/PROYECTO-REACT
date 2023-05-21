import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div className='form'>
      <form>
        <label>Nombre</label>
        <input type='text'></input>
        <label>Email</label>
        <input type='email'></input>
        <label>Título</label>
        <input type='text'></input>
        <label>Mensaje</label>
        <textarea rows='6' placeholder='Escribe aquí tu mensaje'/>
        <button className='btn'>Enviar</button>
      </form>

    </div>
  )
}

export default Form
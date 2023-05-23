import React, {useRef} from 'react'
import './Form.css
import ReCAPTCHA from "react-google-recaptcha";

const Form = () => {
     const captcha = useRef(null);

     const onChange = () => {
      if(captcha.current.getValue()){
        console.log('El usuario no es un robot');
      }
    }
  
    return (

    <div className='form'>
      <form onSubmit={Submit}>
        <label>Name</label>
        <input type='text'></input>
        <label>Email</label>
        <input type='email'></input>
        <label>Title</label>
        <input type='text'></input>

        <label>Mensaje</label>
        <textarea rows='6' placeholder='Escribe aquí tu mensaje'/>
        <div className="recaptcha">
          <ReCAPTCHA
            ref={captcha}
            sitekey="6LcHSjEmAAAAADpYYDwgZFzzNw5nBlrt5VfXFiVc"
            onChange={onChange}
          />
        </div>
        <button className='btn'>Enviar</button>

      </form>

    </div>
  );
};
export default Form

import React from 'react'
import './Form.css'
import ReCAPTCHA from 'react-google-recaptcha';

const Form = () => {
  const Submit = () => {
    alert('Thanks! Your message was sent');
  };
  return (
    <div className='form'>
      <form onSubmit={Submit}>
        <label>Name</label>
        <input type='text'></input>
        <label>Email</label>
        <input type='email'></input>
        <label>Title</label>
        <input type='text'></input>
        <label>Message</label>
        <textarea rows='6' placeholder='Please write your message'/>
        <ReCAPTCHA sitekey="6LerYzEmAAAAABtgwrulyJ1utn3f-2dumT07wcgk" />
        <button className='btn' type='submit'>Submit</button>
      </form>

    </div>
  );
};
export default Form

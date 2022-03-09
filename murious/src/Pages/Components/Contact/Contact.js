import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className='Contact-form' id='contact-form-murious'>
      <div className='contact-us-heading'>
        <div className='title'>Contact Us</div>
        <div className='contact-us-underline'/>
      </div>
      <form className='forms-murious'>
        <input type="text" placeholder="Name (required)" required/>
        <input type="text" placeholder="Email address (required)" required/>
        <input type="text" placeholder="Subject (required)" required/>
        <textarea placeholder="Message (required)" required></textarea>
        <input type="submit" value="Send"/>
      </form>
    {/*<div>
  <div className='contact-form-wrapper d-flex justify-content-center'>
    <form action="#" class="contact-form">
      <h5 class="title">Contact us</h5>
      <p class="description">Feel free to contact us if you need any assistance, any help or another question.
      </p>
      <div className='name'>
        <input type="text" class="form-control rounded border-white mb-3 form-input" id="name" placeholder="Name" required/>
      </div>
      <div className='email'>
        <input type="email" class="form-control rounded border-white mb-3 form-input" placeholder="Email" required/>
      </div>
      <div className='message'>
        <textarea id="message" class="form-control rounded border-white mb-3 form-text-area" rows="5" cols="30" placeholder="Message" required></textarea>
      </div>
      <div className='submit-button-wrapper'>
        <input type="submit" value="Send"/>
      </div>
    </form>
  </div>
  </div>*/}
    </div>
  
  )
}

import React, { useState } from 'react';

const ContactForm = () => {
  
  return (
    <section>
      <h2 class="page-title">Contact Me</h2>
      <div className="form-wrapper">
        <form>
          <label for="firstName">Full Name: </label>
          <input id="firstName" className="border-radius" type="text"></input>
          <label for="email">Email Address: </label>
          <input id="email" className="border-radius" type="text"></input>
          <label for="contact-text">Message:</label>
          <textarea id="contact-text" className="border-radius" type="text"></textarea>
          <button type="submit" className="border-radius">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;

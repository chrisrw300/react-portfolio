import React, { useState } from 'react';

const ContactForm = () => {
  
  return (
    <section>
      <div className="form-wrapper">
        <h2 class="page-title">Contact Me</h2>
        <form>
          <label for="firstName">Full Name: </label>
          <input id="firstName" className="border-radius"></input>
          <label for="email">Email Address: </label>
          <input id="email" className="border-radius"></input>
          <label for="contact-text">Message:</label>
          <textarea id="contact-text" className="border-radius"></textarea>
          <button type="submit" className="border-radius">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;

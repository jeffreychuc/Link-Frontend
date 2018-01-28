import React from 'react';

export default class Contact extends React.Component {
    constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="contact">
        <h2>Contact Us</h2>
        <form className="contact-form" action="POST" action="https://formspree.io/trwong93@gmail.com">
          <input type="hidden" name="_subject" value="Contact request from Link website"/>
          <input type="email" name="_replyto" placeholder="Your email" required/>
          <textarea name="" id="message" placeholder="Your message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}
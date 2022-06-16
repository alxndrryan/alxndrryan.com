import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="container">
      <div className="landing-inner landing-inner-contact">
        <h1 id="contact" className="medium">
          Contact
        </h1>
        <p className="lead hide-sm">
          Have a question? Send me a message and I will get back to you!
        </p>
        <p className="lead hide-lg">Have a question?</p>

        <form ref={form} className="form p-2 hide-sm" onSubmit={sendEmail}>
          <div className="form-group">
            <input type="name" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email Address" />
          </div>
          <div className="form-group">
            <input type="subject" name="subject" placeholder="Subject" />
          </div>
          <div className="form-group">
            <textarea
              rows="4"
              type="message"
              name="message"
              placeholder="Message"
            />
          </div>
          <input className="btn btn-primary" value="Send" type="submit" />
        </form>
        <a
          href="mailto:alexanderhogle@gmail.com"
          className="btn btn-primary hide-lg"
        >
          Compose
        </a>
      </div>
    </section>
  );
};

export default Contact;

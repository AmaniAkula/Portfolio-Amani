import React from 'react';
import './Contact.css';
import { FaEnvelope } from "react-icons/fa"; // FontAwesome Email icon
import { FaPhone } from "react-icons/fa";   // FontAwesome Phone
import { FaMapMarkerAlt } from "react-icons/fa";  // FontAwesome

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "fa1adc7f-6d00-4f56-899a-73a8a8836a86");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert(res.message)
      event.target.reset();
    }
  };


  return (
    <div id='contact' className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
      </div>
      <div class="contact-section">
        <div class="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
          <div class="contact-details">
            <div class="contact-detail">

              <FaEnvelope />
              <p>amaniakulaa@gmail.com</p>

            </div>
            <div class="contact-detail">
              <FaPhone />
              <p>7095887199</p>
            </div>
            <div class="contact-detail">
              <FaMapMarkerAlt />
              <p>Anantapur, Ap</p>

            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="message">Write your message here</label>
          <textarea
            id="message"
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>

          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>

      </div>
    </div>
  )
}

export default Contact
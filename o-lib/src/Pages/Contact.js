import React, { useState } from 'react';
import Scrollbutton from '../Components/Scrollbutton';
import axios from 'axios';

const Contact = () => {
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }

  const [inputs, setInputs] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.post('http://localhost:80/api/email.php', inputs);

      alert("Message Sent Successfully");

      if (data.success) { // Use data instead of response
        alert("Your message has been sent successfully. Thank you!")
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.log(error);
      alert("Error Sending Message" + error.message)
    }
  };

  return (
    <div>
      <div className="contact">
        <div className="get-intouch">
          <h1>Get in <span>Touch</span> with Us</h1>
          <p>Feel free to reach out! We're here to assist you. Drop us a message, and let's start a conversation today.</p>
        </div>
        <div className="contact-division">
          <div className="c-div">
            <h3>Our Home Address</h3>
            <p>Mombasa, Tudor</p>
          </div>
          <div className="c-div">
            <h3>Our Email Address</h3>
            <p>amisifredy20@gmail.com</p>
          </div>
          <div className="c-div">
            <h3>Our Phone</h3>
            <p>+254  113918190</p>
            <p>+254  115030267</p>
          </div>
        </div>
        <div className="contact-b">
          <div className="form">
            <form onSubmit={handleSubmit}> {/* Use onSubmit event instead of onClick */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="number"
                  placeholder="Your Number"
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Enter Your message"
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
          <div className="map"><h3>My Map Location</h3></div>
        </div>
      </div>
      <Scrollbutton />
    </div>
  );
};

export default Contact;

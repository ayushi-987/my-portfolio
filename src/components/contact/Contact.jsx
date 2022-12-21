import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
        <h3>Connect with me</h3>
          <div className="bottom">
        <a href="https://www.linkedin.com/in/ayushisoni987/" target="_blank" rel="noreferrer"><img className="right" src="./assets/lin.png"alt="" /></a>
         <a href="https://www.instagram.com/ayushi._soni/" target="_blank" rel="noreferrer"><img className="right" src="./assets/instagram.png"alt="" /></a>
          <a href="https://github.com/ayushi-987" target="_blank" rel="noreferrer"><img className="right" src="./assets/github.png"alt="" /></a>
      </div>
      </div>
    </div>
  );
}

import "./contact.css"
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';


export default function Contact() {
  const formRef = useRef()
  const [done, setDone] = useState(false);
  const handleSubmit = (e)=>{
    e.preventDefault()
    emailjs.sendForm('service_5a0ucka', 'template_2zwsfgu', formRef.current, 'fMU992mpFSGiQa473')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <div className="c">
      <h1>Contact Page</h1>
      <div className="c-bg"></div>
        <div className="c-wrapper">
          <div className="c-left"> 
            <h1 className="c-title">Get in touch!</h1>
            <div className="c-info">
                <div className="c-info-item">
                  <img src="/phone.png"alt="phone"className="c-icon"
                  />+1 303 378 0445
                </div>
                <div className="c-info-item">
                  <img src="/email.jpg"alt="email"className="c-icon"
                  />ctowns5@proton.me
                </div>
            </div>
          </div>  
          <div className="c-right"> 
            <p className="c-desc">
              Please use the form below to send me a message.
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input type="text" placeholder="Name" name="user_name" />
              <input type="text" placeholder="Subject" name="user_subject" />
              <input type="text" placeholder="Email" name="user_email" />
              <textarea rows="5" placeholder="Message" name="message" />
              <button>Submit</button>
              {done && "Thank you"}
            </form>
          
          </div>
        </div>
    </div>
  );
}

import './ContactForm.css'

const ContactFrom = () => {

  return(
    <>
      <div className="contactFrom">
        <h1>{"Leave Us Your Information"}</h1>
        <p>{"Leave us your information and our customer services will contact to you as soon as possible"}</p>
        <div>
          <input type="text" placeholder="Your name"/>
          <input type="text" placeholder="Your email"/>
        </div>
        <div>
          <input type="text" placeholder="Phone number 1"/>
          <input type="text" placeholder="Phone number 2 (optional)"/>
        </div>
        <div>
          <input className="addressInput" type="text" placeholder="Your address"/>
        </div>
        <div>
          <textarea type="text" placeholder="How Can We Help You?"/>
        </div>
        <button>{"Send Message"}</button>
      </div>
    </>
  );
}

export default ContactFrom 


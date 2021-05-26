import React, { useState} from "react";
import "./App.css";
import { firestore } from "./Firebase/firebase";
import "./ContactUs.css";
import NavBar from "./components/Navbar/NavBarComponent";
import contactusimage from "./images/contactusimage.jpg";
import Footer from './FooterComponent';
const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    firestore
      .collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div background="lightgray">
      <NavBar />
      <div style = {{backgroundImage: `url(${contactusimage})`, backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}}>
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contact Us 🤳</h1>
      <div className= "input-btn">
        <label>Name</label>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </div>
        
        <div className= "input-btn">
        <label>Email</label>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>

        <div className= "input-btn">
        
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}></textarea>
          </div>

      <button className= "input-btn"
        type="submit"
        
      >
        Submit
      </button>
    </form>
    <div>
      <Footer />
    </div>
    </div>
    </div>
  );
};

export default ContactUs;

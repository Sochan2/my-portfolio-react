import React from "react";
import Swal from 'sweetalert2'
import Header from "./Header";
import Footer from "./Footer";

export default function ContactSection(){

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Vite only exposes env vars prefixed with VITE_
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);


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
      setResult("");
      console.log("Success", res);
      Swal.fire({
        title: "Thank you",
        text: "Your message are successful",
        icon: "success"
      });
    }
    else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return(
  <>
<Header />
<main className="section">
<form onSubmit={onSubmit}>
  <h2>Contact Form</h2>
  <div className="name_mail">
      <div className="space">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required />
      </div>
      <div className="space">
        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />
      </div>

  
        
    </div>

    <div className="space">
          <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" placeholder="Subject of your message" required />
        </div>
        

        <div className="space">
          <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="7" placeholder="Write your message" required></textarea>
        </div>

        <div className="submit">
          <button type="submit" name="submit">Submit</button>
        </div>
        {result && <p className="small-text">{result}</p>}
</form>
</main>

<Footer />
</>
  );

}

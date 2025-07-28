import React from "react";
import Swal from 'sweetalert2'
import Header from "./header";
import Footer from "./footer";

export default function ContactSection(){

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.REACT_APP_WEB3FORMS_KEY);
    console.log("Access Key:", process.env.REACT_APP_WEB3FORMS_KEY);


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
</form>

<Footer />
</>
  );

}



/*

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    project_type: "website-development",
    privacy_policy: false,
  });

  const [status, setStatus] = useState({ loading: false, success: null });

  // フォームデータの変更を管理
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // フォーム送信
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null });

    try {
      const response = await fetch("http://localhost:8000/server/mail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ loading: false, success: true });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          project_type: "website-development",
          privacy_policy: false,
        });
      } else {
        setStatus({ loading: false, success: false });
      }
    } catch (error) {
      setStatus({ loading: false, success: false });
    }
  };

  return (
    <div className="container">
      <h1>Contact</h1>
      <main>
        <form onSubmit={handleSubmit}>
          <div className="name_mail">
            <div className="space">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="space">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="space">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject of your message"
              required
            />
          </div>

          <div className="space">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="7"
              placeholder="Write your message"
              required
            ></textarea>
          </div>

          <div className="project_budget">
            <div className="space">
              <label htmlFor="project-type">Your Project</label>
              <select
                id="project-type"
                name="project_type"
                value={formData.project_type}
                onChange={handleChange}
                required
              >
                <option value="website-development">Website Development</option>
                <option value="SEO">SEO</option>
                <option value="website-redesign">Website Redesign</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="checkbox">
            <input
              type="checkbox"
              id="privacy-policy"
              name="privacy_policy"
              checked={formData.privacy_policy}
              onChange={handleChange}
              required
            />
            <label htmlFor="privacy-policy">I agree to the privacy policy</label>
          </div>

          <div className="submit">
            <button type="submit" disabled={status.loading}>
              {status.loading ? "Sending..." : "Submit"}
            </button>
          </div>

          {status.success === true && <p>Message sent successfully!</p>}
          {status.success === false && <p>Failed to send message. Please try again.</p>}
        </form>
      </main>
    </div>
  );
}

*/

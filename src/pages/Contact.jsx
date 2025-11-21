import { useState } from "react";
import styles from "../modules/contact.module.css"

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Contact:", formData);
    // Replace with real form logic (API call, email handler, etc.)
  };

  return (
    <div className={styles.contactDiv}>
      <h2>Contact Us</h2>
      <p>
        Have questions or need help? Fill out the form below.
      </p>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <input
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="input"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="input"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="input"
          required
        />
        <button
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

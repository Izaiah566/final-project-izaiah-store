import { useState } from "react";
import { supabase } from "../../supabaseClient";
import styles from "../modules/registration.module.css"

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {data, error } = await supabase.auth.signUp({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    });

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Replace with actual registration logic (API call)
    console.log("Registering user:", formData);
    setError("");
  };

  return (
    <div className={styles.regDiv}>
      <h2>Create an Account</h2>

      {error && (
        <div>
          {error}
        </div>
      )}
      <div className={styles.regForm}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className={styles.input}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={styles.input}
            required
          />

          <button
            type="submit"
            
          >
            Register
          </button>
        </form>
      </div>
      

      <p>
        Already have an account?{" "}
        <a href="/Auth">
          Login here
        </a>
      </p>
    </div>
  );
};

export default Registration;

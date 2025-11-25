import { useState } from "react";
import { supabase } from "../../supabaseClient";
import { useNavigate } from "react-router-dom";
import styles from "../modules/auth.module.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setMessage("");
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      if (isLogin) {
        // LOGIN
        const { data, error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });
        if (error) throw error;
        setMessage("✅ Logged in successfully!");
        console.log("User:", data.user);
      } else {
        // REGISTER
        const { data, error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            emailRedirectTo: undefined,
          }
        });
        if (error) throw error;
        setMessage("✅ Check your email for confirmation!");
        console.log("New user:", data.user);
      }
    } catch (error) {
      setMessage("❌ " + error.message);
    }
  };

  return (
    <div className={styles.loginDiv}>
      <h2>{isLogin ? "Login" : "Register"}</h2>
      <div className={styles.authForm}>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={styles.input}
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" 
          className={styles.input}
          onClick={() => navigate(`/`)}
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
      </div>

      {message && <p>{message}</p>}

      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button onClick={handleToggle} className={styles.input}>
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </p>
    </div>
  );
};

export default Auth;

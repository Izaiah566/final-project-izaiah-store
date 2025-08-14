import { useState } from "react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleToggle = () => setIsLogin(!isLogin);
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? "Logging in:" : "Registering:", formData);
  };

  return (
    <div className="login-div">
      <h2>{isLogin ? "Login" : "Register"}</h2>
      <div className="auth-form">
          <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" className="input" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" className="input" onChange={handleChange} required />
          <button className="input">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        
      </div>
      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button onClick={handleToggle} className="input">
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </p>
    </div>
  );
};

export default AuthPage;

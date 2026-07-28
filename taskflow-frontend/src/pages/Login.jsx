import { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../services/authService";
import { toast } from "react-toastify";

function Login() {
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await login(user);

      console.log("Login Response:", response);
      console.log("Token:", localStorage.getItem("token"));

      toast.success("Login Successful!");

      setTimeout(() => {
        window.location.replace("/dashboard");
      }, 500);

    } catch (err) {
      console.error(err);

      toast.error("Invalid Email or Password!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="card">

        <h1>🚀 TaskFlow Login</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            required
          />

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "15px",
            }}
          >
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />

            <span style={{ marginLeft: "8px" }}>
              Show Password
            </span>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Logging In..." : "Login"}
          </button>

        </form>

        <br />

        <Link to="/register">
          Don't have an account? Register
        </Link>

      </div>
    </div>
  );
}

export default Login;
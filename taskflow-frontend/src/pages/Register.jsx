import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../services/authService";
import { toast } from "react-toastify";

function Register() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({
    name: "",
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

      await register(user);

      toast.success("Registration Successful!");

      navigate("/");

    } catch (err) {

      toast.error("Registration Failed!");

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="container">

      <div className="card">

        <h1>Create Account</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={user.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>

        </form>

        <br />

        <Link to="/">
          Already have an account? Login
        </Link>

      </div>

    </div>

  );

}

export default Register;
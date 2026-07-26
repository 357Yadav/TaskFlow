import { logout } from "../services/authService";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    logout();

    navigate("/");

  };

  return (

    <nav className="navbar">

      <h2>TaskFlow</h2>

      <button onClick={handleLogout}>
        Logout
      </button>

    </nav>

  );

}

export default Navbar;
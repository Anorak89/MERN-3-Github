import { Link, useNavigate } from "react-router-dom";

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const menuStyle = {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div>
      <h1>Welcome to Blog Application</h1>
      <div style={menuStyle}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        {!isLoggedIn ? (
          <Link to="/login">Login</Link>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}
      </div>
    </div>
  );
};

export default Header;

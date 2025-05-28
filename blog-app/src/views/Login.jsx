import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("username: ", e.target.username.value);
    console.log("password: ", e.target.password.value);

    e.target.username.value = "";
    e.target.password.value = "";

    setIsLoggedIn(true);
    navigate("/");
  };

  return (
    <div>
      <h3>Login to Blog Application</h3>
      <form onSubmit={handleLogin}>
        Username: <input type="text" name="username" />
        Password: <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

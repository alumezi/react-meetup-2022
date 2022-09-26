import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Password from "../Inputs/Password";
import Username from "../Inputs/Username";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  function handleSubmit(event) {
    event.preventDefault();
    const { username, password } = event.target.elements;

    login({
      username: username.value,
      password: password.value,
    }).then(() => {
      navigate("/dashboard");
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username-field">Username</label>
        <Username />
      </div>
      <div>
        <label htmlFor="password-field">Password</label>
        <Password />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Login;

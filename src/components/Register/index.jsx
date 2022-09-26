import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

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
        <input
          id="username-field"
          name="username"
          type="text"
          className="username"
        />
      </div>
      <div>
        <label htmlFor="password-field">Password</label>
        <input
          id="password-field"
          name="password"
          type="password"
          className="password"
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Login;

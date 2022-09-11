const Login = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = event.target.elements;
    onSubmit({
      username: username.value,
      password: password.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username-field">Username</label>
        <input
          id="username-field"
          name="username"
          type="text"
          className="username"
          data-testid="username"
        />
      </div>
      <div>
        <label htmlFor="password-field">Password</label>
        <input
          id="password-field"
          name="password"
          type="password"
          className="password"
          data-testid="password"
        />
      </div>
      <div>
        <button type="submit" data-testid="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Login;

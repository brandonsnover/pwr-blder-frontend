/* eslint-disable react/prop-types */
export function Login(props) {
  console.log("Rendering Login component");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.handleSubmit(params);
  };

  return (
    <div id="login">
      <h1>Login</h1>
      <ul>
        {props.errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleFormSubmit}>
        <div>
          Email: <input name="email" type="email" />
        </div>
        <div>
          Password: <input name="password" type="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

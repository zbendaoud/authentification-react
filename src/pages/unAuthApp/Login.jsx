import React from "react";
import { useAsync } from "../../utils/hooks";
import { useAuth } from "../../context/auth-context.jsx";

export default function Login() {
  const { isLoading, isError, error, run } = useAsync();
  const { login } = useAuth();

  function handleSubmit(event) {
    event.preventDefault();
    const { username, password } = event.target.elements;
    // la function run a besoin d'une promise pour passer du mode deconecter au mode connecter

    run(
      login({
        username: username.value,
        password: password.value,
      })
    );
  }
  if (isLoading)
    return (
      <>
        hey hey <div>kader</div>
      </>
    );
  if (isError)
    return (
      <>
        {error}
        <div>kader</div>
      </>
    );
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>userName</label>
        <input
          name="username"
          type="text"
          defaultValue="eve.holt@reqres.in"
        ></input>
        <label>password</label>
        <input name="password" type="password"></input>
        <button type="submit">logIn</button>
      </form>
    </div>
  );
}

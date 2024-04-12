import React from 'react';
import { useAsync } from '../../utils/hooks';
import { useAuth } from '../../context/auth-context.jsx';
import CardResgister from '../../components/CardResgister.jsx';
import Spiner from '../../components/pageRendu/Spiner.jsx';

export default function Register() {
  const { isLoading, isError, error, run } = useAsync();
  const { register } = useAuth();

  function handleSubmit(event) {
    event.preventDefault();
    const { username, password } = event.target.elements;
    // la function run a besoin d'une promise pour passer du mode deconecter au mode connecter
    run(
      register({
        username: username.value,
        password: password.value
      })
    );
  }
  if (isLoading)
    return (
      <>
        <Spiner />
      </>
    );
  if (isError)
    return (
      <>
        <div> {error}</div>
      </>
    );
  return (
    <div className="h-full ">
      <CardResgister handleSubmit={handleSubmit} customClass=" " />

      {/* <form onSubmit={handleSubmit}>
              <label>userName</label>
              <input
                name="username"
                type="text"
                defaultValue="eve.holt@reqres.in"
              ></input>
              <label>password</label>
              <input name="password" type="password"></input>
              <button type="submit">signUp</button>
            </form> */}
    </div>
  );
}

import React from 'react';
import { useAsync } from '../../utils/hooks';
import { useAuth } from '../../context/auth-context.jsx';
import CardShadow from '../../components/CardShadow.jsx';

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
        password: password.value
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
    <div className="bg-slate-400 w-full h-screen ">
      <>
        <CardShadow customClass="w-1/3 h-svh p-4 m-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="username">
                userName
              </label>
              <input
                id="username"
                name="username"
                type="text"
                defaultValue="eve.holt@reqres.in"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="password">
                password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                logIn
              </button>
            </div>
          </form>
        </CardShadow>
      </>
    </div>
  );
}

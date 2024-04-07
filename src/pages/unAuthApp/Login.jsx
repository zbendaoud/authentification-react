import React from 'react';
import { useAsync } from '../../utils/hooks';
import { useAuth } from '../../context/auth-context.jsx';
import CardShadow from '../../components/CardShadow.jsx';
import backgroundImage from '../../../src/assets/house.jpg';
import CardLogin from '../../components/CardLogin.jsx';
import { useDebouncedValue } from '../../Hook/useDebouncedValue.jsx';
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
    // const [value, setValue] = useState('');
    // const debouncedSearchTerm = useDebouncedValue(value, 500);

    useEffect(() => {}, [debouncedSearchTerm]);
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
      <CardLogin handleSubmit={handleSubmit} customClass="lg:justify-end justify-center " />
    </div>
  );
}

{
  /* <input type="text" value={value} onChange={(e) => setValue(e.target.value)} /> */
}

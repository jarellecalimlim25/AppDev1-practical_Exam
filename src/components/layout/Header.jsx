import { APP_NAME, APP_DESCRIPTION } from '../constants';

function Header() {
  return (
    <>
      <header>
        <h1>{APP_NAME}</h1>
      </header>

      <p>{APP_DESCRIPTION}</p>
    </>
  );
}

export default Header;
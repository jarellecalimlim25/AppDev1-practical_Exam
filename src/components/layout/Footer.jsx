import { APP_DESCRIPTION } from '../constants';

function Footer() {
  return (
    <footer className="site-header">
      <p>{APP_DESCRIPTION}</p>
      <p>Created with React</p>
    </footer>
  );
}

export default Footer;
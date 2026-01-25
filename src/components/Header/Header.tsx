import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
    <>
      <div className="header-container">
        <Link to="/" className="header-link">
          Podcaster
        </Link>
      </div>
    </>
  );
};

export default Header;

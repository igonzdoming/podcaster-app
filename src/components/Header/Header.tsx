import { Link } from 'react-router-dom';
import { useLocale } from '@/hooks/useLocale';
import './Header.css';
const Header = () => {
  const t = useLocale();
  return (
    <>
      <div className="header-container">
        <Link to="/" className="header-link">
          {t.components.header.title}
        </Link>
      </div>
    </>
  );
};

export default Header;

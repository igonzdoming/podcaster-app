import { memo } from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '@/hooks/useLocale';
import './Header.css';

const Header = () => {
  const t = useLocale();

  return (
    <header className="header-container">
      <Link to="/" className="header-link">
        {t.components.header.title}
      </Link>
    </header>
  );
};

export default memo(Header);

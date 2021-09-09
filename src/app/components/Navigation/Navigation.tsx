import React from 'react';
import { Link } from 'react-router-dom';
import CollectionIcon from '../assets/CollectionIcon';
import HomeIcon from '../assets/HomeIcon';
import AddIcon from '../assets/AddIcon';
import styles from './Navigation.module.css';

type NavigationProps = {
  activeLink: 'home' | 'add' | 'collection';
  className?: string;
};

function Navigation({ activeLink, className }: NavigationProps): JSX.Element {
  const active = {
    fill: 'var(--color-primary)',
    stroke: 'var(--color-primary)',
  };

  const inactive = {
    stroke: 'var(--text-primary)',
  };

  return (
    <nav className={`${styles.navigation} ${className}`}>
      <Link to="/collections">
        <CollectionIcon
          className={styles.bookmark}
          {...(activeLink === 'collection' ? active : inactive)}
        />
      </Link>
      <Link to="/">
        <HomeIcon
          className={styles.home}
          {...(activeLink === 'home' ? active : inactive)}
        />
      </Link>
      <Link to="/add">
        <AddIcon
          className={styles.search}
          {...(activeLink === 'add' ? active : inactive)}
        />
      </Link>
    </nav>
  );
}

export default Navigation;

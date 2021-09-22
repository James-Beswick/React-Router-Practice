import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link to="/quotes">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

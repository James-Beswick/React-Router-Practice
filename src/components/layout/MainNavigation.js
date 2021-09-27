import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link to="/quotes">
              <h1>Home</h1>
            </Link>
          </li>
          <li>
            <Link to="new-quote">
              <h1>Add Quote</h1>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

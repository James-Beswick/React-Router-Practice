import classes from './NoQuotesFound.module.css';
import { Link } from 'react-router-dom';

const NoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <h2>No Quotes Found!</h2>
      <Link to="new-quote" className="btn">
        Add a Quote
      </Link>
    </div>
  );
};

export default NoQuotesFound;

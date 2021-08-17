import { Link } from 'react-router-dom';
import classes from './QuoteItem.module.css';

const QuoteItem = props => {
  const linkToQuoteDetails = {
    pathname: `/quotes/:${props.id}`,
    state: { text: props.text, author: props.author },
  };

  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link to={linkToQuoteDetails} className="btn">
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;

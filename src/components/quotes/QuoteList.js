import Card from '../UI/Card';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = props => {
  return (
    <Card>
      <ul className={classes.list}>
        {props.quotes.map(quote => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Card>
  );
};

export default QuoteList;

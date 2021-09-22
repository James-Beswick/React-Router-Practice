import { Fragment, useEffect, useState } from 'react';
import QuoteList from '../components/quotes/QuoteList';
import Card from '../components/UI/Card';
import classes from './AllQuotes.module.css';
import MainNavigation from '../components/layout/MainNavigation';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

const AllQuotes = props => {
  const [quotes, setQuotes] = useState([]);
  const [quotesLoaded, setQuotesLoaded] = useState(false);

  const fetchQuotesHandler = async () => {
    try {
      if (quotes.length > 0) {
        return;
      }

      const res = await fetch('https://type.fit/api/quotes/?_limit=10');

      if (!res.ok) {
        throw new Error('Something Went Wrong!');
      }

      const data = await res.json();
      const quoteList = [];

      for (const key in data) {
        quoteList.push({
          id: key,
          text: data[key].text,
          author: data[key].author,
        });
      }

      setQuotes(quoteList);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (props.createdQuotes) {
      const newData = [...props.createdQuotes];
      setQuotes(newData);
    }

    if (quotes.length > 0) {
      setQuotesLoaded(true);
    } else {
      setQuotesLoaded(false);
    }
  }, [quotes.length, props.createdQuotes]);

  return (
    <Fragment>
      <MainNavigation />
      <Card>
        <span className={classes.h1ButtonSpan}>
          <h1>All Quotes</h1>
          <button className="btn" onClick={fetchQuotesHandler}>
            Generate Quotes
          </button>
        </span>
        {quotesLoaded ? <QuoteList quotes={quotes} /> : <NoQuotesFound />}
      </Card>
    </Fragment>
  );
};

export default AllQuotes;

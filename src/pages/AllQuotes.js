import { Fragment, useState } from 'react';
import QuoteList from '../components/quotes/QuoteList';
import Card from '../components/UI/Card';
import classes from './AllQuotes.module.css';
import MainNavigation from '../components/layout/MainNavigation';

const AllQuotes = () => {
  const [quotes, setQuotes] = useState([]);

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
        <QuoteList quotes={quotes} />
      </Card>
    </Fragment>
  );
};

export default AllQuotes;

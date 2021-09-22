import { useState } from 'react';
import QuoteList from '../components/quotes/QuoteList';
import Card from '../components/UI/Card';
import classes from './AllQuotes.module.css';

const dummy = [
  {
    id: 1,
    text: 'yada yada yada',
    author: 'me',
  },
];

const AllQuotes = () => {
  const [quotes, setQuotes] = useState([]);

  const fetchQuotesHandler = async () => {
    try {
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
    <Card>
      <span className={classes.h1ButtonSpan}>
        <h1>All Quotes</h1>
        <button onClick={fetchQuotesHandler}>Generate Quotes</button>
      </span>
      <QuoteList quotes={quotes} />
    </Card>
  );
};

export default AllQuotes;

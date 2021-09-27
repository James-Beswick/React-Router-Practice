import { Fragment, useEffect, useState } from 'react';
import QuoteList from '../components/quotes/QuoteList';
import Card from '../components/UI/Card';
import classes from './AllQuotes.module.css';
import MainNavigation from '../components/layout/MainNavigation';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

const AllQuotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [quotesLoaded, setQuotesLoaded] = useState(false);

  const fetchQuotesHandler = async () => {
    try {
      if (quotes.length > 0) {
        return;
      }

      const res = await fetch('https://type.fit/api/quotes/');

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
      setQuotesLoaded(true);
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   // const abortController = new AbortController();

  //   const fetchUserQuotesHandler = async () => {
  //     try {
  //       const res = await fetch(
  //         'https://user-comments-project-default-rtdb.europe-west1.firebasedatabase.app/user-comments.json'
  //         // {
  //         //   signal: abortController.signal,
  //         // }
  //       );

  //       if (!res.ok) {
  //         throw new Error('Failed to fetch user quotes');
  //       }

  //       const data = await res.json();

  //       let userQuotes = [...quotes];
  //       userQuotes.push(data);

  //       setQuotes(userQuotes);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   fetchUserQuotesHandler();

  //   // return () => {
  //   //   abortController.abort();
  //   // };
  // });

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

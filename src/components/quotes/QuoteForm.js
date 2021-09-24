import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();

  const postQuoteHandler = async data => {
    try {
      setIsLoading(true);
      const res = await fetch(
        'https://user-comments-project-default-rtdb.europe-west1.firebasedatabase.app/user-comments.json',
        {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!res.ok) {
        throw new Error('Sending quote failed!');
      }

      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    const quoteData = {
      id: Math.random(),
      author: enteredAuthor,
      text: enteredText,
    };

    postQuoteHandler(quoteData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>
        {isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor="author">Author</label>
          <input type="text" id="author" ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="text">Text</label>
          <textarea id="text" rows="5" ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <Link to="/quotes">
            <button type="submit" className="btn">
              Add Quote
            </button>
          </Link>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;

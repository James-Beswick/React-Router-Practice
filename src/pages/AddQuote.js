import { Fragment } from 'react';
import MainNavigation from '../components/layout/MainNavigation';
import { useState } from 'react';
import QuoteForm from '../components/quotes/QuoteForm';

const AddQuote = props => {
  const [isLoading, setIsLoading] = useState(false);

  const addQuoteHandler = data => {
    setIsLoading(true);
    props.passQuote(data);
    setIsLoading(false);
  };
  return (
    <Fragment>
      <MainNavigation />
      <QuoteForm isLoading={isLoading} onAddQuote={addQuoteHandler} />
    </Fragment>
  );
};

export default AddQuote;

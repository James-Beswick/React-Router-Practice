import { Fragment } from 'react';
import MainNavigation from '../components/layout/MainNavigation';
import QuoteForm from '../components/quotes/QuoteForm';

const AddQuote = () => {
  return (
    <Fragment>
      <MainNavigation />
      <QuoteForm />
    </Fragment>
  );
};

export default AddQuote;

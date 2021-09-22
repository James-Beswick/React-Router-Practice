import { Fragment } from 'react';
import MainNavigation from '../components/layout/MainNavigation';

const { default: QuoteForm } = require('../components/quotes/QuoteForm');

const AddQuote = () => {
  return (
    <Fragment>
      <MainNavigation />
      <QuoteForm />
    </Fragment>
  );
};

export default AddQuote;

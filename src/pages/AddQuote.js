import { Fragment } from 'react';
import MainNavigation from '../components/layout/MainNavigation';
import { useState } from 'react';
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

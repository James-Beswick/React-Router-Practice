import { Fragment } from 'react';
import { Route } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import QuoteDetails from './pages/QuoteDetails';

function App() {
  return (
    <Fragment>
      <Route path="/all-quotes">
        <AllQuotes />
      </Route>
      <Route path="/quote-details:id">
        <QuoteDetails />
      </Route>
    </Fragment>
  );
}

export default App;

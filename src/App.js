import { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AddQuote from './pages/AddQuote';
import AllQuotes from './pages/AllQuotes';
import QuoteDetails from './pages/QuoteDetails';

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:id">
          <QuoteDetails />
        </Route>
        <Route path="/new-quote">
          <AddQuote />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;

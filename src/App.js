import { Fragment } from 'react';
import { Route } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';

function App() {
  return (
    <Fragment>
      <Route path="/all-quotes">
        <AllQuotes />
      </Route>
    </Fragment>
  );
}

export default App;

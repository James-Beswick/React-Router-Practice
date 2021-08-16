import QuoteList from '../components/quotes/QuoteList';

const quoteList = [
  {
    id: 'q1',
    author: 'James',
    text: 'This is just a wee bit of placeholder text, nothing to see here :)',
  },
  {
    id: 'q3',
    author: 'Semaj',
    text: "But where did quote two go? I don't know -_:)_-",
  },
]; //dummy data for the mo.

const AllQuotes = props => {
  return (
    <section>
      <h1>All Quotes</h1>
      <QuoteList quotes={quoteList} />
    </section>
  );
};

export default AllQuotes;

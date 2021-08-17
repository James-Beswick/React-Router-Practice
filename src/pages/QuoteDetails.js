import { useParams } from 'react-router-dom';

import Comments from '../components/comments/Comments';
import CommentsList from '../components/comments/CommentsList';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Card from '../components/UI/Card';

const comments = [
  { id: 'c1', text: 'This is an interesting quote, very nuanced!' },
];

const QuoteDetails = () => {
  const params = useParams();

  return (
    <section>
      <HighlightedQuote author={params.author} text={params.text} />
      <Comments />
      <Card>
        <CommentsList comments={comments} />
      </Card>
    </section>
  );
};

export default QuoteDetails;

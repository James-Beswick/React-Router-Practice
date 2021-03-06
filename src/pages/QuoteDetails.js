import { Fragment, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import Comments from '../components/comments/Comments';
import CommentsList from '../components/comments/CommentsList';
import MainNavigation from '../components/layout/MainNavigation';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Card from '../components/UI/Card';

const QuoteDetails = () => {
  const [comments, setComments] = useState([]);
  const location = useLocation();
  const { author, text } = location.state;
  const params = useParams();
  const id = params.id;

  const fetchUserComments = async () => {
    try {
      const res = await fetch(
        `https://user-comments-project-default-rtdb.europe-west1.firebasedatabase.app/user-comments/${id}.json`
      );
      if (!res.ok) {
        throw new Error('Fetching comments failed.');
      }
      const data = await res.json();

      let commentsList = [];

      for (const key in data) {
        commentsList.push({
          id: id,
          text: data[key].text,
        });
      }
      setComments(commentsList);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    fetchUserComments();
    // eslint-disable-next-line
  }, [id]);

  return (
    <Fragment>
      <MainNavigation />
      <section>
        <HighlightedQuote author={author} text={text} />
        <Comments />
        <Card>
          <CommentsList comments={comments} />
        </Card>
      </section>
    </Fragment>
  );
};

export default QuoteDetails;

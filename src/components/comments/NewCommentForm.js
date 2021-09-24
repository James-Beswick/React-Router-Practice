import { useRef } from 'react';
import { useParams } from 'react-router-dom';

import classes from './NewCommentForm.module.css';

const NewCommentForm = () => {
  const commentTextRef = useRef();
  const params = useParams();
  const id = params.id;

  const postCommentHandler = async enteredComment => {
    try {
      const newComment = {
        ...enteredComment,
      };

      const res = await fetch(
        `https://user-comments-project-default-rtdb.europe-west1.firebasedatabase.app/${id}.json`,
        {
          method: 'POST',
          body: JSON.stringify(newComment),
          headers: {
            'Content-Type:': 'application/json',
          },
        }
      );

      if (!res.ok) {
        throw new Error('Posting Comment To Database Failed!');
      }
    } catch (err) {
      alert(err);
    }
  };

  const submitFormHandler = event => {
    event.preventDefault();

    // optional: Could validate here
    const enteredComment = {
      id: Math.random(),
      text: commentTextRef.current.value,
    };

    postCommentHandler(enteredComment);
    commentTextRef.current.value = null;
  };

  // see if I need to change the second onSubmit handler
  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;

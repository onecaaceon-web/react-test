import React from 'react';

function CommentForm({ newComment, setNewComment, handleSubmitComment, handleCancelComment }) {
  return (
    <div className="overlay">
      <div className="comment-form-container">
        <textarea
          className="comment-input-div"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button className="send-button" onClick={handleSubmitComment}></button>
      </div>
    </div>
  );
}

export default CommentForm;
import React from 'react';

function CommentCard({ comment }) {
  return (
    <div className="comment-card">
      <p className="comment-text">{comment}</p>
    </div>
  );
}

export default CommentCard;
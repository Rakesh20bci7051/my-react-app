// Create CommentView component
import React from 'react';

function CommentView({ comments }) {
  return (
    <div>
      <h3>Comments</h3>
      {comments.map((comment, index) => (
        <div key={index}>
          <p>{comment.user.name} said: {comment.content}</p>
        </div>
      ))}
    </div>
  );
}

export default CommentView;
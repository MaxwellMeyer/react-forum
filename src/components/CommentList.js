import React from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";

function CommentList(props) {
  return (
    <>
      <div className="row">
        {props.comments.map((comment) => (
          <Comment
            author={comment.author}
            body={comment.body}
            created={comment.created}
            key={comment.id}
            id={comment.id}
          />
        ))}
      </div>
    </>
  );
}

export default CommentList;

CommentList.propTypes = {
  CommentList: PropTypes.array,
};

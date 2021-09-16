import React from "react";
import PropTypes from "prop-types";

function Comment(props) {
  const date = new Date(props.created)
  return (
    <>
      <div className="col-md-4 mb-3">
        <div
          className="card text-center border-info"
        >
          <div className="card-body">
            <h5 className="card-title">{props.author}</h5>
            <em className="card-text">{date.toLocaleString('en-US')}</em>
            <p className="card-text">{props.body}</p>
          </div>
        </div>
      </div>
    </>
  );
}

Comment.propTypes = {
  author: PropTypes.string,
  body: PropTypes.string,
  created: PropTypes.number
};

export default Comment;

import React from "react";
import PropTypes from "prop-types";

function Post(props) {
  return (
    <>
      <div className="col-md-4 mb-3">
        <div
          onClick={() => props.whenPostClicked(props.id)}
          className="card text-center border-info"
        >
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.body}</p>
          </div>
        </div>
      </div>
    </>
  );
}

Post.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

export default Post;

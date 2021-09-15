import React from "react";
import PropTypes from "prop-types";

function PostDetail(props) {
  const { post } = props;
  return (
    <React.Fragment>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <hr />
    </React.Fragment>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object,
};

export default PostDetail;

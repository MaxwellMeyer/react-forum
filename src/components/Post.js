import React from "react";
import PropTypes from "prop-types";

function Post(props) {
  const title = "Post Title";
  const title2 = "Post 2 Title";
  return (
    <>
      <div>I'm a post named {title}!</div>
      <div>I'm a post named {title2}!</div>
    </>
  );
}

Post.propTypes = {};

export default Post;

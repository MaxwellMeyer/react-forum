import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

function PostList(props) {
  return (
    <>
      <div className="row">
        {props.postList.map((post) => (
          <Post
            whenPostClicked={props.onPostSelection}
            title={post.title}
            body={post.body}
            key={post.id}
            id={post.id}
          />
        ))}
      </div>
    </>
  );
}

export default PostList;

PostList.propTypes = {
  postList: PropTypes.array,
  onPostSelection: PropTypes.func,
};

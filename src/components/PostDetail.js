import React from "react";
import PropTypes from "prop-types";
import CommentList from './CommentList'

function PostDetail(props) {
  const { post, onClickingDelete } = props;
  return (
    <>
      <div className="row">
        <div className="col">
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
        <div className="col-md-3">
          <button className="btn btn-warning" onClick={props.onClickingEdit}>
            Update Post
          </button>
          <button
            className="btn btn-danger"
            onClick={() => onClickingDelete(post.id)}
          >
            DELETE POST
          </button>
        </div>
      </div>
      <CommentList comments={post.comments}/>
      <div className="row"><div className="col"><h2>Comments</h2>Total Comments: {post.comments.size}</div></div>

    </>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default PostDetail;

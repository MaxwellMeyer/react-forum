import React from "react";
import PropTypes from "prop-types";

function PostForm(props) {
  return (
    <>
    <div class="row">
      <div class="col"
      <form onSubmit={props.formSubmissionHandler}>
        <input className="form-control" type="text" name="title" />
        <textarea className="form-control" name="body" />
        <button className="btn btn-primary my-3" type="submit">
          Add Post
        </button>
      </form>
    </>
  );
}

PostForm.propTypes = { formSubmissionHandler: PropTypes.func };
export default PostForm;

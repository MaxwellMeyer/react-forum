import React from "react";
import PropTypes from "prop-types";

function PostForm(props) {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input type="text" name="title" />
        <textarea name="body" />
        <button type="submit"></button>
      </form>
    </>
  );
}

PostForm.propTypes = { formSubmissionHandler: PropTypes.func };
export default PostForm;

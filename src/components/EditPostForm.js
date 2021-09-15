import React from "react";
import PostForm from "./PostForm";
import PropTypes from "prop-types";

function EditPostForm(props) {
  const { post } = props;

  function handleEditPostFormSubmission(event) {
    event.preventDefault();
    props.onEditPost({
      title: event.target.title.value,
      body: event.target.body.value,
      id: post.id,
    });
  }
  return (
    <>
      <PostForm
        formSubmissionHandler={handleEditPostFormSubmission}
        buttonText="Update Post"
        headingText="Update Post"
        post={post}
      />
    </>
  );
}

EditPostForm.propTypes = { post: PropTypes.object, onEditPost: PropTypes.func };
export default EditPostForm;

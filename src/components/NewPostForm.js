import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import PostForm from "./PostForm";

function NewPostForm(props) {
  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewFormCreation({
      title: event.EventTarget.title.value,
      body: event.Event.body.value,
      id: v4(),
    });
  }
  return (
    <>
      <PostForm formSubmissionHandler={handleNewPostFormSubmission} />
    </>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func,
};

export default NewPostForm;

import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import CommentForm from "./CommentForm";

function NewCommentForm(props) {
  function handleNewCommentFormSubmission(event) {
    event.preventDefault();
    props.onNewCommentCreation({
      author: event.target.author.value,
      body: event.target.body.value,
      date: Date.now(),
      id: v4(),
    });
  }
  return (
    <>
      <CommentForm
        formSubmissionHandler={handleNewCommentFormSubmission}
        headingText="Add a Comment"
        buttonText="Add Comment"
      />
    </>
  );
}

NewCommentForm.propTypes = {
  onNewCommentCreation: PropTypes.func,
};

export default NewCommentForm;

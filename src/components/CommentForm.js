import React from "react";
import PropTypes from "prop-types";

function CommentForm(props) {
  let author = "";
  let body = "";
  if (props.comment) {
    author = props.comment.author;
    body = props.comment.body;
  }
  return (
    <>
      <div className="row">
        <h1 className="display-1">{props.headingText}</h1>
        <div className="col-md-8">
          <form onSubmit={props.formSubmissionHandler}>
            <div className="mb-3">
              <label htmlFor="author" className="form-label display-5">
                Comment Title
              </label>
              <input
                id="author"
                className="form-control"
                type="text"
                name="author"
                defaultValue={author}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="body" className="form-label display-5">
                Comment Body
              </label>
              <textarea
                id="body"
                rows="8"
                className="form-control"
                name="body"
                defaultValue={body}
              />
            </div>
            <button className="btn btn-primary my-3" type="submit">
              {props.buttonText}
            </button>
          </form>
        </div>
        <div className="col">An info column!</div>
      </div>
    </>
  );
}

CommentForm.propTypes = { formSubmissionHandler: PropTypes.func };
export default CommentForm;

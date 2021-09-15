import React from "react";
import PropTypes from "prop-types";

function PostForm(props) {
  let title = "";
  let body = "";
  if (props.post) {
    title = props.post.title;
    body = props.post.body;
  }
  return (
    <>
      <div className="row">
        <h1 className="display-1">{props.headingText}</h1>
        <div className="col-md-8">
          <form onSubmit={props.formSubmissionHandler}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label display-5">
                Post Title
              </label>
              <input
                id="title"
                className="form-control"
                type="text"
                name="title"
                defaultValue={title}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="body" className="form-label display-5">
                Post Body
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

PostForm.propTypes = { formSubmissionHandler: PropTypes.func };
export default PostForm;

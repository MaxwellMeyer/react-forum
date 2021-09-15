/* eslint-disable */
import React from "react";
import PostList from "./PostList";
import NewPostForm from "./NewPostForm";
import PostDetail from "./PostDetail";

class PostControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainPostList: [
        {
          title: "post title",
          body: "post body",
        },
      ],
      selectedPost: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.selectedPost != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedPost: null,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.state.mainPostList.filter(
      (post) => post.id === id
    )[0];
    this.this.setState({ selectedPost: selectedPost });
  };

  handleAddingNewPostToList = (newPost) => {
    const newMainPostList = this.state.mainPostList.concat(newPost);
    this.setState({ mainPostList: newMainPostList, formVisibleOnPage: false });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedPost != null) {
      currentlyVisibleState = <PostDetail post={this.state.selectedPost} />;
      buttonText = "Return to Post List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewPostForm onNewPostCreation={this.handleAddingNewPostToList} />
      );
      buttonText = "Return to Post List";
    } else {
      currentlyVisibleState = (
        <PostList
          postList={this.state.mainPostList}
          onPostSelection={this.handleChangingSelectedPost}
        />
      );
      buttonText = "Add Post";
    }
    return (
      <>
        {currentlyVisibleState}
        <button className="btn btn-primary" onClick={this.handleClick}>
          {buttonText}
        </button>
      </>
    );
  }
}

export default PostControl;

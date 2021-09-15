/* eslint-disable */
import React from "react";
import PostList from "./PostList";
import NewPostForm from "./NewPostForm";
import PostDetail from "./PostDetail";
import EditPostForm from "./EditPostForm";

class PostControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainPostList: [],
      selectedPost: null,
      editing: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.selectedPost != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedPost: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.state.mainPostList.filter(
      (post) => post.id === id
    )[0];
    this.setState({ selectedPost: selectedPost });
  };

  handleAddingNewPostToList = (newPost) => {
    const newMainPostList = this.state.mainPostList.concat(newPost);
    this.setState({ mainPostList: newMainPostList, formVisibleOnPage: false });
  };

  handleDeletingPost = (id) => {
    const newMainPostList = this.state.mainPostList.filter(
      (post) => post.id !== id
    );
    this.setState({
      mainPostList: newMainPostList,
      selectedPost: null,
    });
  };

  handleEditingPostInList = (postToEdit) => {
    const editedMainPostList = this.state.mainPostList
      .filter((post) => post.id !== this.state.selectedPost.id)
      .concat(postToEdit);
    this.setState({
      mainPostList: editedMainPostList,
      editing: false,
      selectedPost: null,
    });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    let headingText = null;

    if (this.state.editing) {
      currentlyVisibleState = (
        <EditPostForm
          post={this.state.selectedPost}
          onEditPost={this.handleEditingPostInList}
        />
      );
      buttonText = "Return to Post List";
    } else if (this.state.selectedPost != null) {
      currentlyVisibleState = (
        <PostDetail
          post={this.state.selectedPost}
          onClickingDelete={this.handleDeletingPost}
          onClickingEdit={this.handleEditClick}
        />
      );
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

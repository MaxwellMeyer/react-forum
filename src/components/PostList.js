import React from "react";
import Post from "./Post";

const mainPostList = [
  {
    title: "Title 1",
    body: "Body 1",
  },
  {
    title: "Title 2",
    body: "Body 2",
  },
  {
    title: "Title 3",
    body: "Body 3",
  },
  {
    title: "Title 4",
    body: "Body 4",
  },
];
function PostList() {
  return (
    <>
      <div className="row">
        {mainPostList.map((post, index) => (
          <Post title={post.title} body={post.body} key={index} />
        ))}
      </div>
    </>
  );
}

export default PostList;

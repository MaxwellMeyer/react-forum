import React from "react";
//import PostControl from "./PostControl";
import Header from "./Header";
import PostList from "./PostList";

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <PostList />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

import React from "react";
import PostControl from "./PostControl";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <PostControl />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

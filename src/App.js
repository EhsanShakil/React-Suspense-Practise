import React, { Suspense, lazy } from "react";
import "./App.css";

const Post = lazy(() => import("./Post"));

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Post />
    </Suspense>
  );
}

export default App;

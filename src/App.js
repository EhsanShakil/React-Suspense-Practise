import React, { Suspense, lazy } from "react";
import "./App.css";
import Loader from "./Loader";

const Post = lazy(() => import("./Post"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Post />
    </Suspense>
  );
}

export default App;

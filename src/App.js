import React, { Suspense } from "react";
import "./App.css";
import { createResource } from "./Api";

const resourse = createResource();

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Posts />
    </Suspense>
  );
}

const Posts = () => {
  const posts = resourse.read();
  console.log(posts.title);
  return (
    <div>
      <ul>
        <li>{posts.title}</li>
      </ul>
    </div>
  );
};

export default App;

import React from "react";
import { createResource } from "./api";

const resourse = createResource();

const Post = () => {
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

export default Post;

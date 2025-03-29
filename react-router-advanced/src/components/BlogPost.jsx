import React from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();  // Extract the 'id' from the URL

  return (
    <div>
      <h2>Blog Post ID: {id}</h2>
      <p>Content for Blog Post {id} goes here.</p>
    </div>
  );
}

export default BlogPost;

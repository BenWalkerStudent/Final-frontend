import { useEffect, useState } from "react";
import React from "react";

export default function PostsList() {
  const [posts, setPosts] = useState([]);

  //get posts
  useEffect(() => {
    async function getPosts() {
      const response = await fetch("http://localhost:3001/posts");
      console.log(response);
      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const posts = await response.json();
      setPosts(posts);
    }

    getPosts();
  }, []);
  // delete posts
  async function deletePost(id) {
    await fetch(`http://localhost:3001/posts/${id}`, {
      method: "Delete",
    });

    const newPosts = posts.filter((el) => el._id !== id);
    setPosts(newPosts);
  }
  if (posts.length == 0) {
    return <div> no posts sorry</div>;
  } else {
    return (
      <div>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{ padding: 30, backgroundColor: "lightblue" }}
          >
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <button onClick={() => deletePost(post._id)}>DELETE</button>
          </div>
        ))}
      </div>
    );
  }
}

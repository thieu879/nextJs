"use client"
import { useState, useEffect } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};


const SSRCSRPage = ({ initialPosts }: { initialPosts: Post[] }) => {
  const [posts, setPosts] = useState(initialPosts);

  const refreshPosts = async () => {
    const updatedPosts = await fetchPosts();
    setPosts(updatedPosts);
  };

  return (
    <div>
      <h1>Danh sách Bài viết với Refresh</h1>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 100)}...</p>
          </li>
        ))}
      </ul>
      <button onClick={refreshPosts}>Refresh</button>
    </div>
  );
};

export default SSRCSRPage;

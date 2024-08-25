"use client"
import { useState, useEffect } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

const CSRSearchPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const results = posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(results);
  }, [searchTerm, posts]);

  return (
    <div>
      <h1>Tìm Kiếm Bài viết (CSR)</h1>
      <input
        type="text"
        placeholder="Nhập từ khóa tìm kiếm..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id} className="mb-4">
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CSRSearchPage;

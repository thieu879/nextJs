"use client"
import { useState, useEffect } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

const POSTS_PER_PAGE = 5;

const CSRPaginationPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

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

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const currentPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      <h1>Phân Trang với CSR</h1>
      <ul>
        {currentPosts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 100)}...</p>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CSRPaginationPage;

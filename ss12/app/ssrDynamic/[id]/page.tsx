import React from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

interface PageProps {
  params: {
    id: string;
  };
}

async function fetchPost(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return res.json();
}

export default async function Page({ params }: PageProps) {
  const { id } = params;
  const post = await fetchPost(id);

  return (
    <div>
      <h1>Chi tiết Bài viết</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

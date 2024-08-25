import { notFound } from "next/navigation";

interface Post {
  id: number;
  title: string;
  body: string;
}

const fetchPost = async (id: string): Promise<Post | null> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  if (!response.ok) {
    return null;
  }
  const data = await response.json();
  return data;
};

export async function generateStaticParams() {
  return ["1", "2", "3"].map((id) => ({ id }));
}

const PostDetailPage = async ({ params }: { params: { id: string } }) => {
  const post = await fetchPost(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1>Chi tiết Bài viết với Static Params</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetailPage;

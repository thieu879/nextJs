import Image from "next/image";
import type { Metadata } from "next";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Danh sách bài viết",
  description: "Danh sách các bài viết mới nhất về các chủ đề hấp dẫn.",
};

const posts = [
  {
    id: 1,
    title: "First Blog Post",
    thumbnailUrl:
      "https://images.pexels.com/photos/26124934/pexels-photo-26124934/free-photo-of-thien-nhien-canh-d-ng-ng-a-r-n-nong-thon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    title: "Second Blog Post",
    thumbnailUrl:
      "https://images.pexels.com/photos/26124934/pexels-photo-26124934/free-photo-of-thien-nhien-canh-d-ng-ng-a-r-n-nong-thon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "Third Blog Post",
    thumbnailUrl:
      "https://images.pexels.com/photos/26124934/pexels-photo-26124934/free-photo-of-thien-nhien-canh-d-ng-ng-a-r-n-nong-thon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export default function PostsPage() {
  return (
    <div className="container mx-auto p-4">
      <Breadcrumbs></Breadcrumbs>
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <li key={post.id} className="border p-4 rounded shadow-sm">
            <Image
              src={post.thumbnailUrl}
              alt={post.title}
              width={500}
              height={300}
              className="rounded mb-2"
              priority={post.id === 1}
            />
            <h2 className="text-lg font-semibold">{post.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}


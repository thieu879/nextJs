// pages/blogs/index.js
import Link from "next/link";

const BlogList = () => {
  const blogs = [
    {
      id: 1,
      title: "Lập trình cơ bản C",
      image:
        "https://th.bing.com/th/id/OIP.8kNi5oQbXQT42zP7tp2IoAHaEO?rs=1&pid=ImgDetMain",
    },
    {
      id: 2,
      title: "Lập trình nâng cao C++",
      image:
        "https://th.bing.com/th/id/OIP.QT3D8CyxIfug9ThKGMYWBQAAAA?rs=1&pid=ImgDetMain",
    },
    {
      id: 3,
      title: "JavaScript cho người mới bắt đầu",
      image:
        "https://th.bing.com/th/id/R.e04712df5f409ee6697377023adbf3ef?rik=SLzg%2bZmr6Gpgxg&pid=ImgRaw&r=0",
    },
  ];
  return (
    <div>
      <h1>Danh sách bài viết</h1>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-item">
            <img src={blog.image} alt={blog.title} />
            <h2>{blog.title}</h2>
            <Link
              href={`/blogs/${blog.title.toLowerCase().replace(/ /g, "-")}`}
              className="text-blue-500 underline"
            >
              Xem chi tiết
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;

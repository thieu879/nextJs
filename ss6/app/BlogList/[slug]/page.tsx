import { useRouter } from "next/router";

const BlogDetail = () => {
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
  const router = useRouter();
  const { slug } = router.query;

  const blog = blogs.find(
    (blog) => blog.title.toLowerCase().replace(/ /g, "-") === slug
  );

  if (!blog) {
    return <div>Bài viết không tồn tại</div>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} />
      <p>ID bài viết: {blog.id}</p>
    </div>
  );
};

export default BlogDetail;

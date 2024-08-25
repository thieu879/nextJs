interface Post {
  id: number;
  title: string;
  body: string;
}

const fetchPostsWithError = async (): Promise<Post[]> => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/nonexistent-url"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
};

const SSRErrorPage = async () => {
  let posts: Post[] = [];
  let error: string | null = null;

  try {
    posts = await fetchPostsWithError();
  } catch (err) {
    error = err instanceof Error ? err.message : "An unexpected error occurred";
  }

  return (
    <div>
      <h1>Xử lý Lỗi với SSR</h1>
      {error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body.substring(0, 100)}...</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SSRErrorPage;

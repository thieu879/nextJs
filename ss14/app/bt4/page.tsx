interface Props {
  data?: any;
  error?: string;
}

const ApiErrorPage: React.FC<Props> = ({ data, error }) => {
  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};


export async function fetchData() {
  try {
    const response = await fetch("https://example.com/invalid-endpoint", {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("404: Trang không tồn tại");
      }
      if (response.status === 500) {
        throw new Error("500: Lỗi Máy chủ");
      }
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: "An unknown error occurred" };
  }
}

export default async function Page() {
  const { data, error } = await fetchData();

  return <ApiErrorPage data={data} error={error} />;
}

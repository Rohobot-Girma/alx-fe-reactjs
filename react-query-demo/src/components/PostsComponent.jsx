import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Failed to fetch the data");
  return response.json();
};

function PostsComponent() {
  const { data, isLoading, error, refetch, isError, isFetching } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 10000, // Data stays fresh for 10 seconds
    cacheTime: 1000 * 60 * 5, // Cached for 5 minutes
    refetchOnWindowFocus: true,
    keepPreviousData: true,
  });

  const [showPosts, setShowPosts] = useState(true);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={refetch}>Refetch Posts</button>
      <button onClick={() => setShowPosts((prev) => !prev)}>
        {showPosts ? "Hide Posts" : "Show Posts"}
      </button>
      {isFetching && <p>Refreshing data...</p>}
      {showPosts && data?.map((post) => <p key={post.id}>{post.title}</p>)}
    </div>
  );
}

export default PostsComponent;

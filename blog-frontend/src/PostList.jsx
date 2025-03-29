import { useState, useEffect } from "react";
import axios from "axios";
import { link } from "react-router-dom";

const API_URL = "https:////localhost:5000/api/posts";

function postList () {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("null");

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to load post");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-3x1 mx-auto p-4">
      <h2 className="text-2x1 font-bold mb-4">All Posts</h2>
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post._id} className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-gray-600">{post.content.substring(0, 100)}...</p>
            <Link
              to={`/post/${post._id}`}
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PostList;
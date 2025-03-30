import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5000/api/posts"; // ✅ Corrected URL

function PostList() {
  // ✅ Capitalized component name
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // ✅ Fixed initial state

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to load posts");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      {" "}
      {/* ✅ Fixed Tailwind class */}
      <h2 className="text-2xl font-bold mb-4">All Posts</h2>{" "}
      {/* ✅ Fixed text size */}
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

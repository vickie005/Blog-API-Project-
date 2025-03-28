import { useState, useEffect } from "react";
import axios from "axios";

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
    }, []);

    if (loafing) return <p>Loading...</p>
    if (error) return <p>{error}</p>
    
    return (
        <div>
             <h2>All Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
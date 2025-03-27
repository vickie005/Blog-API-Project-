import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://"

const postList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchPost();
    }, [search, category, page]);

    const fetchPosts = async () => {
        try {
            const res = await axios.get(`${API_URL}?search=${search}&category=${category}&page=${page}`);
            setPosts(res.data);
            setLoading(false);
        } catch (err) {
            console.error("Error fetching post", err);
        }
    };

    return (
        <div>
            <h2>Blog Post</h2>

            {/* Search Bar*/}
            <input
                type="text"
                placeholder="Search posts..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {/*Category Filter*/}
            <select onChange={(e) => setCategory(e.target.value)}>
                <option value="">All Categories</option>
                <option value="Tech">Tech</option>
                <option value="Lifestyle">Lifestyle</option>
            </select>

            {/*Post List*/}
            {loading ? <p>Loading...</p> : (
                <ul>
                    {posts.map((post) => (
                        <li key={post._id}>
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                            <small>Category: {post.category}</small>
                        </li>
                    ))}
                </ul>
            )}

            {/*Pagination*/}
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
            <button onClick={() => setPage(page = 1)}>Next</button>
        </div>
    );
};

export default PostList;
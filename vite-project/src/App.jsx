import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostList from "./components/PostList"; 
import SinglePost from "./components/SinglePost";

function App() {
  return (
    <Router>
      <div>
        <h1>My Blog</h1>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/post/:id" element={<SinglePost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

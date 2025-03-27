import PostList from "./components/PostList"; // Ensure the file path is correct

function App() {
  return (
    <div>
      <h1>My Blog</h1>
      <PostList /> {/* This will render the list of posts */}
    </div>
  );
}

export default App;

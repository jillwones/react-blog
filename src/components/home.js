import { useState, useEffect } from "react";
import BlogList from "./blogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const [name, setName] = useState("Mario")

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
  }, []);

  return (
    <div className="home">
      { blogs ? <BlogList blogs={blogs} title="All Blogs" /> : <div>Loading...</div>}
    </div>
  );
}

export default Home;

 
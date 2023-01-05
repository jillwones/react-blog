import Navbar from "./components/navbar";
import Home from "./components/home";
import Create from "./components/create";
import BlogDetails from "./components/blogDetails";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/create" element={<Create />}/>
            <Route path="/blogs/:id" element={<BlogDetails />}/>
          </Routes>
        </div>
      </div>
  );
}

export default App;

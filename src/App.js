import Navbar from "./components/navbar";
import Home from "./components/home";

function App() {
  const title = "Welcome to the new blog";
  const link = "http://www.google.com"
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;

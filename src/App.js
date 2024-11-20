import "./App.css";
import Posts from "./components/getPosts";
import Create from "./components/createPost";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      HELLO WORLD <br />
      <a href="/create">join in and make a post!</a>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Posts />} />
          <Route exact path="/Create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

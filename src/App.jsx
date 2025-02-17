import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Nav from "./components/Nav";
import Favorites from "./pages/Favorites";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;

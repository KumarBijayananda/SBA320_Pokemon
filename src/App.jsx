import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Nav from "./components/Nav";
import Favorites from "./pages/Favorites";
import Search from "./pages/Search";
import "./App.css";

function App() {

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/search/:query" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;

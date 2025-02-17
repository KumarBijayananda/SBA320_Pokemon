import importPoke from "../utility/ImportPoke";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function MainPage() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [page, setPage] = useState(Math.floor(Math.random() * 50));
  const [favs, setFavs] = useState([]);

  // Load favorites from local storage
  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favs")) || [];
    setFavs(storedFavs);
  }, []);

  // Fetch Pokemon cards
  useEffect(() => {
    async function getPoke(page) {
      const pokemons = [];
      pokemons.push(await importPoke(page));
      setImages(...pokemons);
    }
    getPoke(page);
  }, [page]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleFav = () => {
    const currentCard = images[currentIndex];
    const isFav = favs.some((fav) => fav.id === currentCard.id);

    let updatedFavs;
    if (isFav) {
      updatedFavs = favs.filter((fav) => fav.id !== currentCard.id);
    } else {
      updatedFavs = [...favs, currentCard];
    }

    setFavs(updatedFavs);
    localStorage.setItem("favs", JSON.stringify(updatedFavs));
  };

  function loaded() {
    return (
      <div className="container">
        <div className="cardMain">
          <button onClick={prevImage} className="cardBtn">
            Previous
          </button>
          <div className="cardDiv">
            <button className="cardBtn" onClick={handleFav}>
              {favs.some((fav) => fav.id === images[currentIndex].id)
                ? "Remove from Favs"
                : "Add to Favs"}
            </button>
            <img
              src={images[currentIndex].images.large}
              className="card"
              alt={`Image ${currentIndex + 1}`}
            />
            <Link to='/favorites'>
            <button className="cardBtn">Go to Favs</button>
            </Link>
          </div>
          <button onClick={nextImage} className="cardBtn">
            Next
          </button>
        </div>

      </div>
    );
  }

  function loading() {
    return (
      <div className="displayMain">
        <h1>Loading...</h1>
      </div>
    );
  }

  return images.length > 0 ? loaded() : loading();
}

import importPoke from "../utility/ImportPoke";
import { useState, useEffect } from "react";
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
        <div className="aboutBox"><p>
            Welcome to Pokemon Card Explorer!<br/><br/> 
            You are looking at random Pokemon cards from the TCG Pokemon database. You can explore more by clicking Next and Previous buttons. <br /><br />
            You can also search by typing all or part of the name of the Pokemon. <br /><br/>
            You can favorite a card and access them from your favorites page.</p>
        </div>

        <div className="cardMain">
          <button onClick={prevImage} className="cardBtn">
          ❮
          </button>
          <div className="cardDiv">
            <button className="cardBtn" onClick={handleFav}>
              {favs.some((fav) => fav.id === images[currentIndex].id)
                ? "Remove from Faves"
                : "Add to Faves"}
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
          ❯
          </button>
        </div>
      </div>
    );
  }

  function loading() {
    return (
      <div className="title">
        <h2>Loading...</h2>
      </div>
    );
  }

  return images.length > 0 ? loaded() : loading();
}

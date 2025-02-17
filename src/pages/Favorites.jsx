import { useState, useEffect } from "react";

export default function Fav() {
  const [favs, setFavs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favs")) || [];
    setFavs(storedFavs);
  }, []);

  const nextFav = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % favs.length);
  };

  const prevFav = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + favs.length) % favs.length);
  };

  const removeFav = () => {
    const updatedFavs = favs.filter((fav, index) => index !== currentIndex);
    setFavs(updatedFavs);
    localStorage.setItem("favs", JSON.stringify(updatedFavs));

    if (updatedFavs.length === 0) {
      setCurrentIndex(0);
    } else if (currentIndex >= updatedFavs.length) {
      setCurrentIndex(updatedFavs.length - 1);
    }
  };

  return (
    <>
      <div className="title"><h1>Favorited Cards</h1></div>
      <div>
        {favs.length > 0 ? (
          <>
            <div className="cardMain">
              <button onClick={prevFav} className="cardBtn">
                ❮
              </button>
              <div className="cardDiv">
                <p className="cardIndex">
                  Card {currentIndex + 1} of {favs.length}
                </p>
                <img
                  src={favs[currentIndex].images.large}
                  className="card"
                  alt={favs[currentIndex].name}
                />
                <button className="cardBtn" onClick={removeFav}>
                  Remove from Favorites
                </button>
              </div>

              <button onClick={nextFav} className="cardBtn">
                ❯
              </button>
            </div>
          </>
        ) : (
          <div className="displayMain">
            <p>No favorite Pokémon cards yet.</p>
          </div>
        )}
      </div>
    </>
  );
}

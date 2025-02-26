import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import importPoke from "../utility/ImportPoke";

export default function Search() {
  const { query } = useParams();
  const [searchRes, setSearchRes] = useState([]);
  const [isWaiting, setIsWaiting] = useState(true);
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    try {
      async function searchForPoke() {
        const res = await importPoke(query);
        setSearchRes(res);
        setIsWaiting(false);
      }

      searchForPoke();
    } catch (error) {
      setisWaiting(false);
      console.error(error);
    }
  }, [query]);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favs")) || [];
    setFavs(storedFavs);
  }, []);

  const handleFav = (card) => {
    // console.log(card)
    const currentCard = card;
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

  return (
    <>
      <div className="searchContainer">
        {isWaiting ? (
          <h2 className="title">Loading... Please Wait...</h2>
        ) : (
          <>
            <div className="title">
              <h2>Displaying {searchRes.length} cards that match search</h2>
            </div>
            <div className="searchDiv">
              {searchRes.length > 0 ? (
                searchRes.map((card) => (
                  <div key={card.id} className="searchCard">
                    <button className="cardBtn" onClick={() => handleFav(card)}>
                      {favs.some((fav) => fav.id === card.id)
                        ? "Remove from Faves"
                        : "Add to Faves"}
                    </button>

                    <img
                      src={card.images.small}
                      alt={card.name}
                      className="searchCard"
                    />
                  </div>
                ))
              ) : (
                <p className="title">No search result for {query}.</p>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}

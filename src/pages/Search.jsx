import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import importPoke from "../utility/ImportPoke";

export default function Search() {
  const { query } = useParams();
  const [searchRes, setSearchRes] = useState([]);

  useEffect(()=>{
    try {
        async function searchForPoke(){
            const res= await importPoke(query);
            setSearchRes(res)
        }

        searchForPoke();

    } catch (error) {
        console.error(error)        
    }
    },[query])

   

  return (
    <>
       <div className="searchContainer">
          <div className="title"><h2>Search</h2></div>
          <div className="searchDiv">
            {searchRes.length > 0 ? (
              searchRes.map((card) => (
                <div key={card.id} className="searchCard">
                  <img src={card.images.small} alt={card.name} />
                  <p>{card.name}</p>
                </div>
              ))
            ) : (
              <p>No search result for `${query}`.</p>
            )}
          </div>
        </div>
    </>
  );
}

import { useEffect, useState } from "react";
import axios from "axios";

function ImportPoke() {
  const [poke, setPoke] = useState([]);

  useEffect(() => {

    try {
        const getPoke = async () => {
            const result = await axios.get(
              `https://api.pokemontcg.io/v2/cards/xy1-1`
            );
            const res = await result.data;
            console.log(res);
            setPoke(res);
          };
          getPoke();
        
    } catch (error) {
        console.log(error)
    }

}, []);

  return (
    <>
      <div className="posts">
        <h1>{poke.data.name}</h1>
        {/* <img src={res.data.images.small} alt="" /> */}

      </div>
    </>
  );
}

export default ImportPoke;
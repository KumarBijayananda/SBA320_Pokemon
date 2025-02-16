import { useEffect, useState } from "react";
import axios from "axios";

function ImportPoke() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    try {
      const apikey = "1bc45c64-df72-4072-ab42-551b6de898f9";
      const getPoke = async () => {
        const result = await axios.get(
          `https://api.pokemontcg.io/v2/cards?page=1&pageSize=20`,
          {
            method: "GET",
            headers: {
              "X-Api-Key": apikey,
              "Content-Type": "application/json",
            },
          }
        );
        const res = await result.data;
        console.log(res.data);
        setImages(res.data);
      };
      getPoke();

      
    } catch (error) {
      console.log(error);
    }
  }, []);

  const nextImage = () => {
setCurrentIndex((prevIndex) => ((prevIndex + 1) % images.length));
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    ); 
  };



  
  function loaded() {
    return (
        <div className="cardMain"> 
                      <button onClick={prevImage} className="cardBtn">Previous</button>

          <img src={images[currentIndex].images.large} className="card" alt={`Image ${currentIndex + 1}`} />
    
          {/* <p>
            Image {currentIndex + 1} of {images.length}
          </p>
     */}
          <button onClick={nextImage} className="cardBtn">Next</button>
        </div>
      );
    }    

  function loading() {
    return (
      <>
        <div className="displayMain">
          <h1>Loading...</h1>
        </div>
      </>
    );
  }

  return images[0] ? loaded() : loading();
}

export default ImportPoke;

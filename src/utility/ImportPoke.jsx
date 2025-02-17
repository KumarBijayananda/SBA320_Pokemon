import axios from "axios";

export default async function importPoke(param) {
  try {
    const apikey = "1bc45c64-df72-4072-ab42-551b6de898f9";

    if(typeof param=== "number"){
    console.log(typeof param)
    const result = await axios.get(
      `https://api.pokemontcg.io/v2/cards?page=${param}&pageSize=10`,
      {
        method: "GET",
        headers: {
          "X-Api-Key": apikey,
          "Content-Type": "application/json",
        },
      }
    );
    const res = await result.data;
    return (res.data);

    } else if (typeof param==="string"){
     const result = await axios.get(
      `https://api.pokemontcg.io/v2/cards?q=name:${param}*`,
      {
        method: "GET",
        headers: {
          "X-Api-Key": apikey,
          "Content-Type": "application/json",
        },
      }
    );
    const res = await result.data;
    return (res.data);

    }


  } catch (error) {
    console.error(error);
  }
}

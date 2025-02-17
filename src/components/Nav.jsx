import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


export default function Nav() {
    const [form, setForm]=useState("")
    const navigate = useNavigate();


    function handleChange(event){
        setForm(event.target.value);

    }
    function handleSubmit(event){
        event.preventDefault();
        console.log("form",form)
        const query = removeAfterSpace(form);
        if(query!==""){
            navigate (`/search/${query}`);
        }
        // const searchResult= await importPoke(form);
        // console.log(searchResult);

    }

    //check if string contains space and return only the part after space
    function removeAfterSpace(str) {
        if (str.includes(' ')) {
          return str.substring(0, str.indexOf(' '));  //only return string before the space
        }
        return str; // return original string if no space is found
      }


  return (
    <nav className="nav">
      <Link to="/">
        <div className="logoDiv">
          <img
            className="logo"
            src="src/assets/pokemon-logo.png"
            alt="image of pokemon logo"
          />
        </div>
      </Link>
      <div className="search-container">
        <form
          onSubmit={handleSubmit}
        >
          <input className="search-box" name="search" type="text" onChange={handleChange} placeholder="Search..." />
        
        </form>
      </div>
    
    </nav>
  );
}

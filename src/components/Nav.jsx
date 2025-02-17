import { Link } from "react-router-dom";
import { useState } from "react";
import importPoke from "../utility/ImportPoke";
import { useNavigate } from "react-router-dom";


export default function Nav() {
    const [form, setForm]=useState("")
    const navigate = useNavigate();


    function handleChange(event){
        setForm(event.target.value);

    }
    async function handleSubmit(event){
        event.preventDefault();
        if(form.trim()!==""){
            navigate ('/search');
        }
        // const searchResult= await importPoke(form);
        // console.log(searchResult);

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

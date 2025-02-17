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
        if(form.trim()!==""){
            navigate (`/search/${form}`);
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

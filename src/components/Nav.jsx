import { Link } from "react-router-dom";
import { useState } from "react";


export default function Nav() {
    const [form, setForm]=useState("")

    function handleChange(event){
        setForm(event.target.value);

    }
    function handleSubmit(event){
        event.preventDefault();
        console.log(form);
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
          {/* <button type="submit" className="search-box">
            Search
          </button> */}
        </form>
      </div>
      {/* <Link to='/currencies'>
        <div>CURRENCIES</div>
      </Link> */}
    </nav>
  );
}

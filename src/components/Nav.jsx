import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
  const [form, setForm] = useState("");
  const navigate = useNavigate();

  function handleChange(event) {
    setForm(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const query = removeAfterSpace(form);
    
    if (query !== "") {
      navigate(`/search/${query}`);
    }
  }

  //check if string contains space and return only the part after space
  function removeAfterSpace(str) {
    if (str.includes(" ")) {
      return str.substring(0, str.indexOf(" ")); //only return string before the space
    }
    return str; // return original string if no space is found
  }

  return (
    <nav className="nav">
      <Link to="/">
        <div className="navDiv">
          <button className="navBtn">Home Page</button>
        </div>
      </Link>
      <div>
        <div className="logoDiv">
          <Link to="/">
            <img
              className="logo"
              src="src/assets/pokemon-logo.png"
              alt="image of pokemon logo"
            />
          </Link>
        </div>
        <div className="search-container">
          <form onSubmit={handleSubmit} autoComplete="off">
            <input
              className="search-box"
              name="search"
              type="text"
              onChange={handleChange}
              placeholder="Search..."
            />
          </form>
        </div>
      </div>
      <Link to="/favorites">
        <div className="navDiv">
          <button className="navBtn">Favorites Page</button>
        </div>
      </Link>
    </nav>
  );
}

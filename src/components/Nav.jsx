import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className='nav'>
      <Link to='/'>
        <div><img className="logo" src="src/assets/Pokemon_banner.jpg" alt="image of pokemon logo" /></div>
      </Link>
      {/* <Link to='/currencies'>
        <div>CURRENCIES</div>
      </Link> */}
    </nav>
  );
}
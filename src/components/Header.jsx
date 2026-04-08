import { Link } from 'react-router-dom';

const Header = ({ active }) => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light bold">
      <div className="container-fluid flex-grow-1">
        <Link className="navbar-brand" to="/"> <img src="/duck/logo-w2.ico" alt="三杯鴨LOGO" width="30"
          height="30" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={` nav-link ${active === 'about-allabout' ? 'active' : ''}`} to="/about-allabout">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className={` nav-link ${active === 'all-news' ? 'active' : ''}`} to="/all-news">News</Link>
            </li>
            <li className="nav-item dropdown">
              <a className={` nav-link dropdown-toggle ${active === 'all-product' ? 'active' : ''}`} href="#" id="navbarDropdownMenuLink" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Shop Mugs
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><Link className="dropdown-item" to="/product-allproduct">All</Link></li>
                <li><Link className="dropdown-item" to="/product-glass">Glass</Link></li>
                <li><Link className="dropdown-item" to="/product-stainless">Stainless Steel</Link></li>
                <li><Link className="dropdown-item" to="/product-woody">Wood</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className={` nav-link ${active === 'member' ? 'active' : ''}`} to="/member">Members</Link>
            </li>
            {/* <li className="nav-item">
              <Link className={` nav-link ${active === 'about-contact-us' ? 'active' : ''}`} to="/about-contact-us">Contact Us</Link>
            </li> */}
          </ul>
          <ul className="search navbar-nav d-flex">
            <li className="nav-item"><a className="nav-link" href="#"><i className="fa-solid fa-magnifying-glass fa-xl"
              style={{ color: "#22668D" }}></i></a></li>
            <li className="nav-item"><Link className="nav-link" to="/cart"><i className="fa-solid fa-cart-shopping fa-xl"
              style={{ color: "#22668D" }}></i></Link></li>
            <li className="nav-item"><Link className="nav-link" to="/member"><i className="fa-solid fa-user fa-xl"
              style={{ color: "#22668D" }}></i></Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header;

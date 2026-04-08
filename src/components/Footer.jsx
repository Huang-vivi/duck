import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Link className="logo" to="/">
        <img src="./logo.ico" alt="Quackmug Logo" className="logo" />
      </Link>
      <div className="info">
        <address>ADD. 181 Yaming Rd., Yaxiang Dist., Yaxiang City</address>
        <p>TEL. 02-2200-0124</p>
        <p>EMAIL. pig20071219@gmail.com</p>
        <p>OPENING HOURS. 10:00-19:00</p>
        <small>© 2024 Quackmug.com Inc.</small>
      </div>
      <div className="sitemap">
        <ul className="menu d-flex flex-column list-unstyled gap-2">
          <li>
            <Link to="/about-allabout">Brand Story</Link>
          </li>
          <li>
            <Link to="/all-news">News</Link>
          </li>
          <li>
            <Link to="/member">Members</Link>
          </li>
          <li>
            <Link to="/about-contact-us">Contact Us</Link>
          </li>
        </ul>
        <ul className="media d-flex list-unstyled gap-3 mt-3">
          <li>
            <a href="#">
              <i
                className="fa-brands fa-square-facebook fa-2xl"
                style={{ color: "#FFFADD" }}
              ></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i
                className="fa-brands fa-square-instagram fa-2xl"
                style={{ color: "#FFFADD" }}
              ></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i
                className="fa-brands fa-square-x-twitter fa-2xl"
                style={{ color: "#FFFADD" }}
              ></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

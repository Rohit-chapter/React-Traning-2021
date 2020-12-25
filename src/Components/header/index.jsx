import { Link } from "react-router-dom";

function Header() {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/blog">Blog</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
      </nav>
  );
}

export default Header;

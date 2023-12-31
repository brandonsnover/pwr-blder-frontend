import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {/* header */}
      <header className={`header-area header-sticky ${isMenuOpen ? "menu-open" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* logo  */}
                <a href="index.html" className="logo">
                  <h1>PwrBldr</h1>
                </a>
                {/* logo end  */}
                {/* menu start  */}
                <ul className="nav">
                  <li>
                    <a href="/" className="active">
                      My Programs
                    </a>
                  </li>
                  <li>
                    <a href="/exercises">Exercise Index</a>
                  </li>
                  {localStorage.jwt === undefined ? (
                    <li>
                      <a href="/login">Login</a>
                    </li>
                  ) : (
                    <li>
                      <a onClick={handleClick} href="/">
                        Logout
                      </a>
                    </li>
                  )}
                  <li>
                    <a href="#">
                      <i className="fa fa-calendar"></i> Why It Works
                    </a>
                  </li>
                </ul>
                <a className="menu-trigger" onClick={handleMenuToggle}>
                  <span>Menu</span>
                </a>
                {/* menu end  */}
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* header end  */}

      {/* burger menu */}
      <div className={`burger-menu ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav">
          <li>
            <Link to="/" className={isMenuOpen ? "active" : ""}>
              My Programs
            </Link>
          </li>
          <li>
            <Link to="/exercises">Exercise Index</Link>
          </li>
          <li>
            {localStorage.jwt === undefined ? (
              <Link to="/login">Login</Link>
            ) : (
              <a onClick={handleClick} href="/">
                Logout
              </a>
            )}
          </li>
          <li>
            <a href="#">
              <i className="fa fa-calendar"></i> Why It Works
            </a>
          </li>
        </ul>
      </div>
      {/* burger menu end */}
    </>
  );
}

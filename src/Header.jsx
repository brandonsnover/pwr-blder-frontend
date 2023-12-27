import axios from "axios";

export function Header() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <>
      {/* header */}
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* logo  */}
                <a href="/" className="logo">
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
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
                {/* menu end  */}
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* header end  */}
    </>
  );
}

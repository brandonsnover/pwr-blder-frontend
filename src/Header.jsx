export function Header() {
  return (
    <>
      {/* header */}
      <header className="header-area header-sticky">
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
                  <li>
                    <a href="contact.html">About Us</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-calendar"></i> Schedule a visit
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

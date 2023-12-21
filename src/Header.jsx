import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link> | <a href="#">Link</a>
      </nav>
    </header>
  );
}

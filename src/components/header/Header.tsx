import { NavLink } from "react-router-dom";

export const Header = () => {
  const logOut = () => {
    localStorage.removeItem("token");
  };

  return (
    <header className="header">
      <nav>
        <NavLink to="/generator" className="header_link">
          Lead Generator
        </NavLink>
        <NavLink to="/verifier" className="header_link">
          Email Verifier
        </NavLink>
        <NavLink to="/scraper" className="header_link">
          Email Scraper
        </NavLink>
        <NavLink to="/" className="header_link" onClick={logOut}>
          Log out
        </NavLink>
      </nav>
    </header>
  );
};

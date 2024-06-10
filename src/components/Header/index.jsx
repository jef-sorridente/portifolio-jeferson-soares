import "./Header.css";

import logo from "../../assets/logo.svg";

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <>
      <header className="header">
        <img className="logo" src={logo} alt="logo jeferson soares" />
        <nav className="nav">
          <ul>
            <li
              onMouseEnter={() => setOpenMenu("home")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link to="/">Home</Link>
              {openMenu === "home" && (
                <ul className="dropdown">
                  <li>
                    <a href="/#projetos">Projetos</a>
                  </li>
                </ul>
              )}
            </li>
            <li
              onMouseEnter={() => setOpenMenu("sobre")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <NavLink to="/about">Sobre Mim</NavLink>
              {openMenu === "sobre" && (
                <ul className="dropdown">
                  <li>
                    <a href="/about/#history">História</a>
                  </li>
                  <li>
                    <a href="/about/#works">Carreira</a>
                  </li>
                  <li>
                    <a href="/about/#skills">Skills</a>
                  </li>
                  <li>
                    <a href="/about/#education">Educação</a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </nav>
      </header>
      <hr className="line" />
    </>
  );
};

export default Header;

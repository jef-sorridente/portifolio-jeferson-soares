import "./Header.css";

import logo from "../../assets/logo.svg";

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const [openNav, setOpenNav] = useState(false);

  const toggleMenu = () => {
    setOpenNav(!openNav);
  };

  return (
    <>
      <header className="header">
        <img className="logo" src={logo} alt="logo jeferson soares" />
        {window.innerWidth >= 768 ? (
          <nav className="nav">
            <ul>
              <li
                onMouseEnter={() => setOpenMenu("home")}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link to="/">Home</Link>
                {!openNav && openMenu === "home" && (
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
                {!openNav && openMenu === "sobre" && (
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
        ) : (
          openNav && (
            <nav className="nav">
              <ul>
                <li
                  onMouseEnter={() => setOpenMenu("home")}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <Link to="/">Home</Link>
                  {!openNav && openMenu === "home" && (
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
                  {!openNav && openMenu === "sobre" && (
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
          )
        )}
        <IoMenu onClick={toggleMenu} className="btn-menu" />
      </header>
      <hr className="line" />
    </>
  );
};

export default Header;

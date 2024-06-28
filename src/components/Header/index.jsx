import "./Header.css";

import logo from "../../assets/logo.svg";

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Header = () => {
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
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <NavLink to="/about">Sobre Mim</NavLink>
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
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">Sobre Mim</NavLink>
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

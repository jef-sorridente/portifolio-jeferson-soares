//CSS
import "./Footer.css";

//Router-dom
import { Link } from "react-router-dom";

//Icons
import { FaLinkedin, FaGithub, FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <hr className="line" />
      <footer className="footer" id="contato">
        <h3 className="h3-style">Minhas Redes</h3>
        <ul>
          <li>
            <Link
              to="https://www.linkedin.com/in/jeferson-soares-2735ab190/"
              target="_blank"
            >
              <FaLinkedin />
              LinkedIn
            </Link>
          </li>
          <li>
            <Link to="https://github.com/jef-sorridente" target="_blank">
              <FaGithub />
              GitHub
            </Link>
          </li>
          <li>
            <Link
              to="https://api.whatsapp.com/send?phone=5551997675656&text=Olá,%20meu%20nome%20é%20Jeferson%20Soares!%0AMe%20envie%20uma%20mensagem."
              target="_blank"
            >
              <FaWhatsappSquare />
              WhatApp
            </Link>
          </li>
        </ul>
        <p>&copy;Portifólio desenvolvido por Jeferson Soares - 2024</p>
      </footer>
    </>
  );
};

export default Footer;

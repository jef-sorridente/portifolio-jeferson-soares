//CSS
import "./Footer.css";

//Router-dom
import { Link } from "react-router-dom";

//Icons
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const textCopy = "jeferson53@gmail.com";
  const btnCopy = document.getElementById("copy-button");

  const copyEmail = () => {
    navigator.clipboard
      .writeText(textCopy)
      .then(() => {
        btnCopy.innerHTML = "E-mail Copiado";
        btnCopy.classList.add = "copy-email";

        setTimeout(() => {
          btnCopy.innerHTML = "jeferson53@gmail.com";
          btnCopy.classList.remove = "copy-email";
        }, 4000);
      })
      .catch((err) => {
        console.error("Erro ao copiar texto: ", err);
      });
  };

  return (
    <>
      <hr className="line" />
      <footer className="footer" id="contato">
        <h3 className="h3-style">Minhas Redes</h3>
        <ul>
          <li>
            <Link
              className="custom-buttom"
              to="https://www.linkedin.com/in/jeferson-soares-2735ab190/"
              target="_blank"
            >
              <FaLinkedin />
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              className="custom-buttom"
              to="https://github.com/jef-sorridente"
              target="_blank"
            >
              <FaGithub />
              GitHub
            </Link>
          </li>
          <li>
            <button
              onClick={copyEmail}
              className="custom-buttom"
              id="copy-button"
            >
              jeferson53@gmail.com
            </button>
            <p>Clique para copiar o e-mail</p>
          </li>
        </ul>

        <p>&copy;Portifólio desenvolvido por Jeferson Soares - 2024</p>
      </footer>
    </>
  );
};

export default Footer;

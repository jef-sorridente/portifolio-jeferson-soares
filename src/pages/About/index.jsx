//Css
import "./About.css";

//Imagens
import imageProfile from "../../assets/imageProfile.png";

//Icons
import { FaCss3Alt, FaFigma, FaHtml5, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { DiJqueryLogo } from "react-icons/di";

const About = () => {
  return (
    <section className="about">
      <h2 className="title">
        <span>Sobre Mim</span>
      </h2>
      <section className="about-details" id="history">
        <img
          src={imageProfile}
          alt="Foto de perfil do Jeferson Soares"
          className="image"
        />
        <div className="about-content">
          <h2 className="subtitle">
            Conheça melhor <br />
            sobre <span> minha história</span>
          </h2>
          <p>
            Tenho 23 anos em busca de uma vaga de desenvolvevdor Front-End, sou
            formado em Tecnico de TI e cursando ADS, com 3 anos de experiência
            como Assistente de Suporte. <br />
            Nesse portifólio estou mostrando meus principais projetos que estou
            fazendo atualmente.
          </p>
        </div>
      </section>
      <section className="about-details" id="works">
        <div className="about-content">
          <h2 className="subtitle">
            Minha carreira
            <br /> <span> profissional</span>
          </h2>
          <ol className="list-works">
            <li>
              3S Corporate, Novo Hamburgo, RS.
              <br />
              <span>Agosto de 2022 - maio de 2024.</span>
            </li>
            <li>
              Laboratório Nobel LTDA e Dasa Empresas, Esteio, RS
              <br />
              <span>Agosto de 2022 - maio de 2024.</span>
            </li>
          </ol>
        </div>
        <img
          src={imageProfile}
          alt="Foto de perfil do Jeferson Soares"
          className="image"
        />
      </section>
      <section className="about-details" id="skills">
        <div className="subtitle-skills">
          <h2 className="subtitle">
            Minhas
            <span> hard skills</span>
          </h2>
          <p>Conhecimentos obtidos em estudos e projetos.</p>
        </div>
        <div className="container-card">
          <div className="card">
            <FaHtml5 />
            <h3>HTML5</h3>
            <p>Conhecimento em estrutura de sites com HTML5</p>
          </div>
          <div className="card">
            <FaCss3Alt />
            <h3>CSS</h3>
            <p>Conhecimento em estrutura de sites com HTML5</p>
          </div>
          <div className="card">
            <FaReact />
            <h3>REACT</h3>
            <p>Conhecimento em estrutura de sites com HTML5</p>
          </div>
          <div className="card">
            <RiJavascriptFill />
            <h3>JavaScript</h3>
            <p>Conhecimento em estrutura de sites com HTML5</p>
          </div>
          <div className="card">
            <DiJqueryLogo />
            <h3>JQuery</h3>
            <p>Conhecimento em estrutura de sites com HTML5</p>
          </div>
          <div className="card">
            <FaFigma />
            <h3>Figma</h3>
            <p>Conhecimento em estrutura de sites com HTML5</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;

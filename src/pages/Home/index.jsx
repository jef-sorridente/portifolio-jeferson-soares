//Css
import "./Home.css";

//Imagens
import imageProfile from "../../assets/imageProfile.png";

//Components
import Projects from "../../components/Projects";

//Icons
import { FaCode } from "react-icons/fa";

const Home = () => {
  return (
    <section className="home">
      <section className="home__main">
        <div className="home__main__content">
          <h1 className="title">
            <span>Olá, meu nome é Jeferson,</span> sou Desenvolvedor Front-end.
          </h1>
          <p>
            Tenho 23 anos em busca de uma vaga de desenvolvevdor Front-End, sou
            formado em Tecnico de TI e cursando ADS, com 3 anos de experiência
            como Assistente de Suporte. Nesse portifólio estou mostrando meus
            principais projetos que estou fazendo atualmente.
          </p>
        </div>
        <div>
          <img
            className="home__main__image"
            src={imageProfile}
            alt="Foto de perfil do Jeferson Soares"
          />
        </div>
      </section>
      <section className="work">
        <h2 className="subtitle">Minha carreira profissional</h2>
        <div className="work__content">
          <ol className="work__list">
            <li>
              <b>Assistente de Tecnologia</b>
              <p>3S Corporate, Novo Hamburgo, RS.</p>
              <p>Agosto de 2022 - maio de 2024.</p>
            </li>
            <li>
              <b>Assistente de Tecnologia</b>
              <p>Laboratório Nobel LTDA e Dasa Empresas, Esteio, RS</p>
              <p>Agosto de 2022 - maio de 2024.</p>
            </li>
          </ol>
          <FaCode className="work__icon" />
        </div>
      </section>
      <Projects />
      {/* <section>
        <h2 className="subtitle">
          <span>Formação</span>
        </h2>
      </section> */}
    </section>
  );
};

export default Home;

//CSS
import "./Projects.css";

//icons
import { IoLogoVercel } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="projects">
      <div>
        <h2 className="subtitle">
          Conheça Mais do Meu <span>Trabalho e Projetos</span>
        </h2>
        <p>
          Aqui é um campo onde você conhece mais sobre meus projetos e trabalhos
        </p>
      </div>
      <div className="projects__container">
        <div className="projects__container__item">
          <div className="item__header__title">
            <h4 className="item__title">Projeto</h4>
            <p>Tecno D</p>
          </div>
          <div className="item__header__title">
            <h4 className="item__title">Descrição</h4>
            <p>
              Site de tecnologia ficticio com layout criado pelo Figma e projeto
              feito em HTML e CSS durante o cusrso da EBAC.
            </p>
          </div>
          <div className="projects__container__item__main">
            <div className="item__main__list__container">
              <p className="item__title">Tecnologias</p>
              <ul className="item__main__list">
                <li className="item__main__list__itens">html</li>
                <li className="item__main__list__itens">css</li>
                <li className="item__main__list__itens">figma</li>
              </ul>
            </div>
            <div className="item__container__links">
              <a
                className="item__link"
                href="https://projeto-1-ebac-ruby.vercel.app"
                target="_blank"
              >
                <IoLogoVercel /> Deploy
              </a>
              <a
                className="item__link"
                href="https://github.com/jef-sorridente/projeto-1-ebac/tree/main"
                target="_blank"
              >
                <FaGithub /> Github
              </a>
            </div>
          </div>
        </div>
        <div className="projects__container__item">
          <div className="item__header__title">
            <h4 className="item__title">Projeto</h4>
            <p>Ebc-cards</p>
          </div>
          <div className="item__header__title">
            <h4 className="item__title">Descrição</h4>
            <p>
              Site de tecnologia ficticio, layout criado pelo Figma e projeto
              feito em HTML e CSS utilizando bootstrap durante o cusrso da EBAC.
            </p>
          </div>
          <div className="projects__container__item__main">
            <div className="item__main__list__container">
              <p className="item__title">Tecnologias</p>
              <ul className="item__main__list">
                <li className="item__main__list__itens">bootstrap</li>
                <li className="item__main__list__itens">figma</li>
              </ul>
            </div>
            <div className="item__container__links">
              <a
                className="item__link"
                href="https://jefersonsoares-ebc-cards.vercel.app"
                target="_blank"
              >
                <IoLogoVercel /> Deploy
              </a>
              <a
                className="item__link"
                href="https://github.com/jef-sorridente/13.11-bootstrap/tree/main"
                target="_blank"
              >
                <FaGithub /> Github
              </a>
            </div>
          </div>
        </div>
        <div className="projects__container__item">
          <div className="item__header__title">
            <h4 className="item__title">Projeto</h4>
            <p>Clone da pagina da disney.</p>
          </div>
          <div className="item__header__title">
            <h4 className="item__title">Descrição</h4>
            <p>Clone da pagina da disney utilizando gulpfile e sass.</p>
          </div>
          <div className="projects__container__item__main">
            <div className="item__main__list__container">
              <p className="item__title">Tecnologias</p>
              <ul className="item__main__list">
                <li className="item__main__list__itens">html</li>
                <li className="item__main__list__itens">sass</li>
                <li className="item__main__list__itens">gulpfile</li>
                <li className="item__main__list__itens">figma</li>
              </ul>
            </div>
            <div className="item__container__links">
              <a
                className="item__link"
                href="https://clone-disneyplus-jeferson-soares.vercel.app"
                target="_blank"
              >
                <IoLogoVercel /> Deploy
              </a>
              <a
                className="item__link"
                href="https://github.com/jef-sorridente/clone_disneyplus"
                target="_blank"
              >
                <FaGithub /> Github
              </a>
            </div>
          </div>
        </div>
        <div className="projects__container__item">
          <div className="item__header__title">
            <h4 className="item__title">Projeto</h4>
            <p>Liga Gaúcha de Artes Marciais</p>
          </div>
          <div className="item__header__title">
            <h4 className="item__title">Descrição</h4>
            <p>
              Página para a LGAM uma instituição de artes marciais <br />{" "}
              *Página em construção*
            </p>
          </div>
          <div className="projects__container__item__main">
            <div className="item__main__list__container">
              <p className="item__title">Tecnologias</p>
              <ul className="item__main__list">
                <li className="item__main__list__itens">React</li>
                <li className="item__main__list__itens">React Router Dom</li>
                <li className="item__main__list__itens">Styled Components</li>
                <li className="item__main__list__itens">Figma</li>
              </ul>
            </div>
            <div className="item__container__links">
              <a
                className="item__link"
                href="https://lgamrs.com.br"
                target="_blank"
              >
                <IoLogoVercel /> Deploy
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

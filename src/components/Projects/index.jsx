//CSS
import "./Projects.css";

//Hooks
import { useState } from "react";

//Icones
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Projects = () => {
  const [openProject, setOpenProject] = useState(false);

  const handleOpenProject = (item) => {
    setOpenProject(item.id);
  };

  const arrayProjects = [
    {
      id: 1,
      name: "Página TecnoD",
      date: "Maio 2024",
      description:
        "Site de tecnologia ficticio, layout criado pelo Figma projeto feito em HTML e CSS no cusrso da EBAC.",
      linguages: ["html", "css"],
      image:
        "https://projeto-1-ebac-ruby.vercel.app/imagens/imagem-projeto.jpg",
    },
    {
      id: 2,
      name: "Página TecnoD",
      date: "Maio 2024",
      description:
        "Site de tecnologia ficticio, layout criado pelo Figma projeto feito no cusrso da EBAC.",
      linguages: ["html", "css"],
      image:
        "https://projeto-1-ebac-ruby.vercel.app/imagens/imagem-projeto.jpg",
    },
  ];
  return (
    <section id="projetos">
      <div className="container-subtitle">
        <div>
          <h2 className="subtitle">
            Conheça Mais do Meu <span>Trabalho e Projetos</span>
          </h2>
          <p>
            Aqui é um campo onde você conhece mais sobre meus projetos e
            trabalhos
          </p>
        </div>
      </div>
      <div className="projects">
        {arrayProjects.length > 0 ? (
          arrayProjects.map((project) => (
            <div key={project.id} className="project-item">
              <div className="project-description">
                <div>
                  <h3 className="projects-subtitle">Projeto</h3>
                  <span>{project.name}</span>
                </div>
                <div>
                  <p className="projects-subtitle">Data</p>
                  <p>{project.date}</p>
                </div>
                {openProject === project.id ? (
                  <BsChevronDown onClick={handleOpenProject} />
                ) : (
                  <BsChevronUp onClick={() => handleOpenProject(project)} />
                )}
              </div>
              {openProject === project.id && (
                <div className="handle-project">
                  <div className="project-content">
                    <p>{project.description}</p>
                    <div>
                      <p>Linguagens Utilizadas:</p>
                      <p>{project.linguages}</p>
                    </div>
                    <div>
                      <div>
                        <p>Deploy:</p>
                        <a href="https://projeto-1-ebac-ruby.vercel.app">
                          Link
                        </a>
                      </div>
                      <div>
                        <p>GitHub</p>
                        <a href="https://github.com/jef-sorridente/projeto-1-ebac.git">
                          Link
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="project-container-imagem">
                    <img
                      className="project-image"
                      src={project.image}
                      alt="imagem do projeto"
                    />
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <h2 className="subtitle">Ainda não tem projetos aqui!</h2>
        )}
      </div>
    </section>
  );
};

export default Projects;

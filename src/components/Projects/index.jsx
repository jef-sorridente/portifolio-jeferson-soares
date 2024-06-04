//CSS
import "./Projects.css";

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
        "Site de tecnologia ficticio, layout criado pelo Figma projeto feito no cusrso da EBAC.",
      image:
        "https://projeto-1-ebac-ruby.vercel.app/imagens/imagem-projeto.jpg",
    },
    {
      id: 2,
      name: "Teste 2",
      date: "Maio 2024",
      description: "Projeto em React de um blog",
      image:
        "https://s5.static.brasilescola.uol.com.br/img/2019/06/arara-azul.jpg",
    },
    {
      id: 3,
      name: "Teste 3",
      date: "Maio 2024",
      description: "Projeto em React de um blog",
      image:
        "https://nxboats.com.br/wp-content/uploads/2023/11/Lamborghini.jpg",
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
                  <span>{project.name}</span>
                  <p>{project.date}</p>
                </div>
                <div>
                  <p>{project.description}</p>
                  <a href="https://chatgpt.com/?oai-dm=1">Chat</a>
                </div>
                {openProject === project.id ? (
                  <BsChevronDown onClick={handleOpenProject} />
                ) : (
                  <BsChevronUp onClick={() => handleOpenProject(project)} />
                )}
              </div>
              {openProject === project.id && (
                <div className="teste" onClick={handleOpenProject}>
                  <img
                    className="project-image"
                    src={project.image}
                    alt="imagem do projeto"
                  />
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

//Css
import "./Home.css";

//Imagens
import imageProfile from "../../assets/imageProfile.png";

//Components
import CustomButtom from "../../components/CustomButtom";
import Projects from "../../components/Projects";

const Home = () => {
  return (
    <section className="home">
      <section>
        <div className="container-title">
          <h1 className="title">
            <span>Olá, meu nome é Jeferson,</span> sou Desenvolvedor Front-end
          </h1>
          <CustomButtom link="/about">Mais Sobre Mim</CustomButtom>
        </div>
        <img
          className="profile-image"
          src={imageProfile}
          alt="Foto de perfil do Jeferson Soares"
        />
      </section>

      <Projects />
    </section>
  );
};

export default Home;

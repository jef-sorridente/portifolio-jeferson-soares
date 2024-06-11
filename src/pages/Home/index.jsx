//Css
import "./Home.css";

//Imagens
import imageProfile from "../../assets/imageProfile.png";

//Components
import Projects from "../../components/Projects";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <section>
        <div className="container-title">
          <h1 className="title">
            <span>Olá, meu nome é Jeferson,</span> sou Desenvolvedor Front-end
          </h1>
          <Link to="/about">
            <button className="custom-buttom">Mais Sobre Mim</button>
          </Link>
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

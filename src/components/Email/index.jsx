//CSS
import CustomButtom from "../CustomButtom";
import "./Email.css";

const Email = () => {
  return (
    <section className="social-media">
      <h2 className="subtitle">
        Entre em <span>Contato!</span>
      </h2>
      <p>Clique para copiar o e-mail</p>
      <CustomButtom>jeferson53@gmail.com</CustomButtom>
    </section>
  );
};

export default Email;

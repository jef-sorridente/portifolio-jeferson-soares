//CSS
import "./Email.css";

const Email = () => {
  const copyEmail = () => {
    const textCopy = "jeferson53@gmail.com";

    const btnCopy = document.getElementById("copy-button");

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
    <section className="social-media">
      <h2 className="subtitle">
        Entre em <span>Contato!</span>
      </h2>
      <p>Clique para copiar o e-mail</p>
      <button onClick={copyEmail} className="custom-buttom" id="copy-button">
        jeferson53@gmail.com
      </button>
    </section>
  );
};

export default Email;

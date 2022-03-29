import "./styles.css";
import fran from "../../assets/fran.jpg";
import fran2 from "../../assets/fran2.png";

export default function About() {
  return (
    <main id="about" style={{ backgroundImage: `url(${fran2})` }}>
      {/* <FaDiscord color="red" size={30} /> */}
      <p class="imagem-about">
        <img src={fran} />
      </p>

      <h1>Oi! Me chamo Francieli Celeghim</h1>

      <p class="texto-about">
        Sou programadora Junior full stack e iniciei meus estudos na escola Digital House em parceria com o Mercado livre.
        Sei desenvolver nas linguagens javascript e java, e sei usar as linguagens de estilo html, css e react.
        Moro em Curitiba e atualmente procuro trabalho remoto no Brasil.
      </p>
    </main>
  );
}


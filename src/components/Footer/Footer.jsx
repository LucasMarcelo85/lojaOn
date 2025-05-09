import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="app-store-play">
        <h1>GoFashion</h1>
        <p>
          A GoFashion é uma loja de roupa feminina que une estilo, elegância e autenticidade. Com peças selecionadas para valorizar a beleza e a personalidade de cada mulher, a GoFashion oferece desde looks casuais até opções mais sofisticadas, sempre acompanhando as principais tendências da moda. Aqui, cada detalhe importa
        </p>
        <div className="icon-footer appstore">
          <div className="img d_flex logo-text">
            <i className="fa-brands fa-google-play"></i>
            <span>Google Play Store</span>
          </div>
          <div className="img d_flex logo-text">
            <i className="fa-brands fa-app-store-ios"></i>
            <span>Apple App Store</span>
          </div>
        </div>
      </div>
      <div className="">
        <h2>Sobre</h2>
        <ul>
          <li>Contratos</li>
          <li>Stories</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="">
        <h2>Personalizados</h2>
        <ul>
          <li>Central</li>
          <li>Compre agora</li>
          <li>Sugestões</li>
          <li>Corporação</li>
          <li>Suporte</li>
        </ul>
      </div>
      <div className="">
        <h2>Contato</h2>
        <ul>
          <li className="contact-info-flex">
            {" "}
            <a
              target="_blank"
              href="https://maps.app.goo.gl/Cp7o98Ze4eYBGh5L7?g_st=aw"
              className="icon-flex phone-icon"
            >
              Rua Aspirante Mendes, Aerolandia, Fortaleza - CE, 60851-285
            </a>
          </li>

          <li className="contact-info-flex">
            Email :
            <a
              target="_blank"
              href="mailto:Karlinha4647@gmail.com"
              className="icon-flex phone-icon"
            >
              Karlinha4647@gmail.com
            </a>
          </li>
          <li className="contact-info-flex">
            Phone :{" "}
            <a
              target="_blank"
              href="https://wa.me/5585982064398?text=Ol%C3%A1%2C%20vi%20seu%20site%20e%20tenho%20interesse"
              className="icon-flex phone-icon"
            >
              (85) 9 8206 4398
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <div className="social-icons">
          <a
            href="https://github.com/LucasMarcelo85"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon github-icon"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <div className="social-icons-right">
          <a
            href="https://www.instagram.com/gofashion_brasil"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon instagram-icon"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://wa.me/5585982064398"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon whatsapp-icon"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

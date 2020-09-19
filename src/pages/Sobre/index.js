import React, { Component } from "react";
import "./styles.css";
import video from "../../assets/video/video_conceitual.mp4";
import videoThumb from "../../assets/svg/video.svg";
import youtube from "../../assets/svg/youtube@4x.svg";
import instagram from "../../assets/svg/instagran@4x.svg";

export default class Sobre extends Component {
  render() {
    return (
      <div className="pagina2">
        <div className="texto-pagina2">
          <h2>
            Somos uma rede colaborativa que ajuda você, <br />
            empresa e artesão.
          </h2>
          <h3>Confira o vídeo e saiba como atuamos!</h3>
          <p>
            A quantidade de resíduos sólidos que são descartados
            <br />
            de maneira incorreta tem sido um dos maiores
            <br />
            problemas dentro da nossa sociedade. Assim, a<br />
            Descartes, vem para auxiliar o gereciamento desses
            <br />
            resíduos, atuando como intermediário entre empresas
            <br />
            que quere destinar seus resíduos sólidos descartáveis
            <br />
            para pessoas que as utilizarão para fins artesanais.
          </p>
          <h3>Acompanhem nas nossas redes sociais:</h3>
          <a href="https://www.youtube.com/channel/UCECIHlguuhCiSk24xiSWCew/featured">
            <img src={youtube} alt="youtube logo"></img>/projetodescartes
          </a>
          <a href="https://www.instagram.com/projetodescartes/">
            <img src={instagram} alt="youtube logo"></img>/projetodescartes
          </a>
        </div>
        <div className="video">
          <video controls poster={videoThumb}>
            <source src={video} type="video/mp4"></source>
          </video>
        </div>
      </div>
    );
  }
}

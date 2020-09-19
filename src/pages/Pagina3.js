import React, { Component } from 'react';
import './pagina3.css';

export class Pagina3 extends Component {
    
    
    render() {
        return (
            <div className="pagina3">

                <div className="titulo">
                    <h1>Nossos parceiros</h1>
                </div>
                <div className="cards">
                    <div className="empresas">
                    <h2>Empresas</h2><a href="">Veja mais...</a><br /><br />
                    <div className="fundo">
                    <img src="img-maos.svg" id="empresas"></img>
                    <p>Conheça as empresas parceiras que<br /> 
                    contribuem para o desenvolvimento<br />  
                    do seu trabalho e com uma<br />  
                    sociedade mais sustentável</p>
                    </div>
                    </div>
                    <div className="selo">
                    <h2>Selo de sustentabilidade</h2><a href="">Veja mais...</a><br /><br />
                <div className="fundo">
                    <img src="quadro-img-selos.svg" id="empresas"></img>
                    <p>Nossos parceiros ganham selos de<br />
                    sustentabilidade por maior contribuição<br /> 
                    e engajamento. Referência em<br /> 
                    comprometimento e responsabilidade<br />
                    com o ambiente e a sociedade</p>
                    </div>
                    </div>
                <div className="publicidade">
                    <h2>Publicidade</h2><a href="">Veja mais...</a><br /><br />
                    <div className="fundo">
                    <img src="anuncios.svg" id="anuncios"></img>
                    </div>
                    </div>
                </div>
            </div>     
        )
    }
}

export default Pagina3;

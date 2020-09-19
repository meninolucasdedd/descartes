import React, { Component } from 'react';
import FormTest from '../Testes/FormTest.js';
import './pagina4.css';

export class Pagina4 extends Component {
    render() {
        return (
            <div className="pagina4">
                <div className="Titulos-BarraP">
                    <div className="titulos-pagina4">
                    <h1>Os melhores produtos você encontra aqui.</h1>
                    <h3>Encontre os produtos, lojas e artesãos que deseja.</h3>
                </div>
                <div className="barra-pesquisa">
                    <div className="barra-pesquisa1">
                        <label for="barra-pesquisa">Qual produto procura?</label><br />
                        <select name="material" id="material">
                        <option value="opcao0" aria-checked="">Selecione o produto. Ex.: vaso de planta...</option>
                        <option value="opcao1" >Vaso de madeira para plantas</option>
                        <option value="opcao2">Sofá de Paletes</option>
                        <option value="opcao3">Balanço de Pneus</option>
                        <option value="opcao4">Todas</option>
                        </select></div>
                    <div className="barra-pesquisa2">
                        <label for="barra-pesquisa">Qual loja/artesão procura?</label><br />
                        <select name="material" id="material">
                        <option value="opcao0" aria-checked="">Selecione um nome. Ex.: Artesão A, Loja B...</option>
                        <option value="opcao1" >Artesão A</option>
                        <option value="opcao2">Loja A</option>
                        <option value="opcao3">Artesão C</option>
                        <option value="opcao4">Todos</option>
                        </select></div>
                    <div className="barra-pesquisa3">
                        <button type="submit" id="botao-pesquisar">Pesquisar</button><br /></div>
                </div>
            </div>
            <FormTest></FormTest>
        </div>
        )
    }
}

export default Pagina4;

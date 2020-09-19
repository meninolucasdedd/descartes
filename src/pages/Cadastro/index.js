import React, { Component } from 'react';
import './styles.css';
import subNav from '../../components/Navegador';
import Navegador from '../../components/SubNav';
import { Link } from 'react-router-dom';

export class Cadastro extends Component {
    render() {
        return (
            <div className="Cadastro">
                <Navegador></Navegador>
                <subNav></subNav>

                <div className="cadastrar">
                    <form method="POST" >
                    <fieldset className="estilo-cadastro">
                    <h1>Cadastro</h1>

                    <input type="text" placeholder="e-mail ou CPF"></input><br />
                    <input type="numero" placeholder="senha"></input><br />
                    <a href="">Esqueci minha senha</a><br /><br />

                    <button type="submit"><strong>Entrar</strong></button><br />
                    <p>ou</p>
                    <Link to='/idEmpresa'><button type="submit"><strong>Quero me cadastrar</strong></button></Link>

                    
                    </fieldset>

                    </form>
                </div>
            </div>
        )
    }
}

export default Cadastro;

import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export default class subNav extends Component {
    render() {
        return (
            <div>
                <nav className="Navegador-menu">
                    <p className="p1">
                        <ul className="ul">
                            <li><a href="" >Sobre</a></li>
                            <li><a href="" >Parceiros</a></li>
                            <li><a href="" >Loja</a></li>
                        </ul>
                    </p>
                    <p className="p2">Bem vindo! <Link to="/cadastrar">Cadastre-se</Link></p>
                </nav>
            </div>
        )
    }
}


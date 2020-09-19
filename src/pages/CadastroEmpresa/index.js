import React, { Component } from "react";
import Navegador from "../../components/Navegador";
import subNav from "../../components/SubNav";
import "./styles.css";

export class CadastroEmpresa extends Component {
  render() {
    return (
      <div className="cadastroEmpresa">
        <Navegador />
        <subNav />

        <div className="idEmpresa">
          <form method="POST">
            <fieldset className="Empresa">
              <h2>Identificação</h2>
              <button type="submit" className="botaoSeletor">
                Empresa
              </button>
              <button type="submit" className="botaoSeletor">
                Artesão
              </button>
              <br />

              <input
                type="text"
                Component="input"
                placeholder="Nome da empresa*"
                className="inputMaior"
              ></input>
              <br />
              <input
                type="text"
                Component="input"
                placeholder="Rua*"
                className="inputMaior"
              ></input>
              <br />
              <input
                type="text"
                Component="input"
                placeholder="Número*"
                className="inputMenor"
              ></input>
              <input
                type="text"
                Component="input"
                placeholder="Bairro*"
                className="inputMenor"
              ></input>
              <br />
              <input
                type="text"
                Component="input"
                placeholder="Nome completo*"
                className="inputMaior"
              ></input>
              <br />
              <input
                type="text"
                Component="input"
                placeholder="E-mail*"
                className="inputMaior"
              ></input>
              <br />
              <input
                type="text"
                Component="input"
                placeholder="Telefone 1*"
                className="inputMaior"
              ></input>
              <br />
              <input
                type="text"
                Component="input"
                placeholder="Telefone 2*"
                className="inputMaior"
              ></input>
              <br />
              <p>
                Ao clicar em "Enviar" você concorda com os{" "}
                <strong>
                  Termos e Condições
                  <br />
                  do Descartes
                </strong>{" "}
                e confirma que leu a <strong>Política de Privacidade.</strong>
              </p>
              <button type="submit" className="enviarEmpresa">
                Enviar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default CadastroEmpresa;

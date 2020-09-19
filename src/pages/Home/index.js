import React, { Component } from "react";

import "./styles.css";

import Nav from "../../components/SubNav";
import Pesquisa from "../../components/BarraPesquisa";

import Footer from "../../components/Footer";
import Carousel from "../Carousel";
import Sobre from "../Sobre";

export default class Home extends Component {
  render() {
    return (
      <div>
        <body>
          <Nav />
          <Carousel />
          
          <Pesquisa />
          <Sobre />
          <Footer />
        </body>
      </div>
    );
  }
}

import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Beneficios from './Components/Beneficios';
import Cifras from './Components/Cifras';
import Contact from './Components/Contact';
import Tarifas from './Components/Tarifas';
import MiniBanner from "./Components/MiniBanner";
import Devices from './Components/Devices';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar',
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }



  render() {
    return (
      <div className="App">
        <Header/>
        <Devices/>
        <Beneficios/>
        <Cifras/>
        <MiniBanner/>
        <Tarifas/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import logo from '../Assets/TULLIP-LOGO-01.svg';
import ParticlesBg from "particles-bg";
import {Zoom, FadeInUp} from 'animate-components';
import MouseParticles from 'react-mouse-particles'
import {FcCheckmark} from "react-icons/fc";
import {AiFillPlayCircle} from "react-icons/ai";

class Header extends Component {
    render() {


        return (
            <header id="home">
                <ParticlesBg color="#F299C1" num={12} type="cobweb" bg={true}/>
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Ver menú</a>
                    <a className="mobile-btn" href="#home" title="Hide navigation">Ocultar menú</a>
                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Inicio</a></li>
                        <li><a className="smoothscroll" href="#beneficios">Beneficios</a></li>
                        <li><a className="smoothscroll" href="#cifras">Cifras</a></li>
                        <li><a className="smoothscroll" href="#tarifas">Tarifas</a></li>
                        <li><a className="smoothscroll" href="#contact">Contacto</a></li>
                    </ul>
                </nav>

                <div id="bannerContainer" className="row banner">
                    <Zoom duration='1.2s'>
                        <div id="banner-logo">
                            <img src={logo}/>
                        </div>
                    </Zoom>

                    <FadeInUp duration='1s'>
                        <div className="banner-text">

                            <h3 id="descripcion">Tullip es el CRM mexicano dedicado al desarrollo mobiliario,
                                que te permitirá tener un mayor y mejor
                                control de tus clientes y de las ventas de tus casas.</h3>

                            <h2 id="subdescripcion">Cónoce todos los beneficios que te brindará esta plataforma y todo
                                lo que vas a ahorrar en tiempo y esfuerzos mal invertidos</h2>

                            <ul id="botoneraHeader">
                                <a id="botonContratar" className="button btn color1">CONTRATAR</a>

                                <a id="botonReproducir" className="button btn color1">Reproducir Video</a>

                            </ul>

                        </div>
                    </FadeInUp>
                    {/*<MouseParticles g={1} color="#D406FF" cull="col,image-wrapper"/>*/}
                </div>


            </header>
        );
    }
}

export default Header;

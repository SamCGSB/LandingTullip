import React, {Component} from 'react';
import tablet from '../Assets/tablet-empty.png';
import phone from '../Assets/phone-bg.png';
import logoPrueba from '../Assets/logoPrueba.png';
import logo1 from '../Assets/logo1.png';
import logo2 from '../Assets/logo2.png';
import logo3 from '../Assets/logo3.png';
import logo5 from '../Assets/logo5.png';
import logo6 from '../Assets/logo6.png';

class Beneficios extends Component {
    render() {

        return (
            <section id="beneficios">

                <div id="filaLogos" className="row">
                    <div className="imgLogos"><img src={logo1}/></div>
                    <div className="imgLogos"><img src={logo2}/></div>
                    <div className="imgLogos"><img src={logo3}/></div>
                    <div className="imgLogos"><img src={logo5}/></div>
                    <div className="imgLogos"><img src={logo6}/></div>
                </div>
                <br/>
                <div id="parrafoBeneficionConte">
                    <p id="parrafoBeneficio">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus ad
                        alias assumenda facilis
                        fugiat fugit impedit libero omnis provident quaerat quas qui, quia recusandae reprehenderit sit
                        temporibus vero voluptate!</p>
                </div>
                <div id="cards-beneficios">
                    <div className="card">
                        <div className="container">
                            <p>Some random texts</p>
                            <p>Yet another texts</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="container">
                            <p>Some random texts</p>
                            <p>Yet another texts</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="container">
                            <p>Some random texts</p>
                            <p>Yet another texts</p>
                        </div>
                    </div>
                </div>


            </section>
        );
    }
}

export default Beneficios;

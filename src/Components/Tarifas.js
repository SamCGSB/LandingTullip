import React, {Component} from 'react';
import {FcCheckmark} from 'react-icons/fc';

class Tarifas extends Component {
    render() {


        return (
            <section id="tarifas">
                <div id="contenedorTarifas">
                    <div id="textoTarifas">
                        <h3>Las mejores tarifas para empresas</h3>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur dignissimos
                            eaque esse sequi ullam.</p>

                        <ul>
                            <li>Beneficio importante</li>
                            <li>Beneficio importente</li>
                        </ul>

                        <a id="botonContratar" className="button btn color1">CONTRATAR</a>

                    </div>
                    <div id="tarifasTarifa">
                        <table id="tablaTarifa">
                            <tr>
                                <th>Características</th>
                                <th>Personal</th>
                                <th>Comercial</th>
                                <th>Empresa</th>
                            </tr>
                            <tr>
                                <td>Beneficio 1</td>
                                <td><FcCheckmark size={30}/></td>
                                <td><FcCheckmark size={30}/></td>
                                <td><FcCheckmark size={30}/></td>
                            </tr>
                            <tr>
                                <td>Beneficio 1</td>
                                <td><FcCheckmark size={30}/></td>
                                <td><FcCheckmark size={30}/></td>
                                <td><FcCheckmark size={30}/></td>
                            </tr>
                            <tr>
                                <td>Beneficio 1</td>
                                <td><FcCheckmark size={30}/></td>
                                <td><FcCheckmark size={30}/></td>
                                <td><FcCheckmark size={30}/></td>
                            </tr>
                            <tr>
                                <td>Beneficio 1</td>
                                <td><FcCheckmark size={30}/></td>
                                <td><FcCheckmark size={30}/></td>
                                <td><FcCheckmark size={30}/></td>
                            </tr>
                            <tr>
                                <td>Beneficio 1</td>
                                <td><FcCheckmark size={30}/></td>
                                <td><FcCheckmark size={30}/></td>
                                <td><FcCheckmark size={30}/></td>
                            </tr>
                            <tr>
                                <td>Beneficio 1</td>
                                <td><FcCheckmark size={30}/></td>
                                <td><FcCheckmark size={30}/></td>
                                <td><FcCheckmark size={30}/></td>
                            </tr>
                            <tr>
                                <td>Beneficio 1</td>
                                <td><FcCheckmark size={30}/></td>
                                <td><FcCheckmark size={30}/></td>
                                <td><FcCheckmark size={30}/></td>
                            </tr>
                            <tr>
                                <td>Beneficio 1</td>
                                <td>$150</td>
                                <td>$150</td>
                                <td>$150</td>
                            </tr>

                        </table>
                    </div>

                </div>
            </section>
        );
    }
}

export default Tarifas;




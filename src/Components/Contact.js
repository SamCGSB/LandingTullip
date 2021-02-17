import React, {Component} from 'react';
import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp} from "react-icons/ai";
import logo from '../Assets/TULLIP-LOGO-01.svg';


class Contact extends Component {
    render() {

        return (
            <section id="contact">
                <div id="contactoContainer">
                    <div>
                        <h4>Lorem ipsum dolor sit amet.</h4>
                        <br/>
                        <p>Lorem ipsum dolor.</p>
                        <p>Lorem ipsum dolor.</p>
                        <p>Lorem ipsum dolor.</p>
                        <p>Lorem ipsum dolor.</p>
                    </div>
                    <div>
                        <h4>Lorem ipsum dolor sit amet.</h4>
                        <br/>
                        <p>Lorem ipsum dolor.</p>
                        <p>Lorem ipsum dolor.</p>
                        <p>Lorem ipsum dolor.</p>
                        <p>Lorem ipsum dolor.</p>
                    </div>

                    <div>
                        <h4>Lorem ipsum dolor sit amet.</h4>
                        <br/>
                        <p>Lorem ipsum dolor.</p>
                        <p>Lorem ipsum dolor.</p>
                        <p>Lorem ipsum dolor.</p>
                        <p>Lorem ipsum dolor.</p>
                    </div>
                    <div>
                        <h4>Lorem ipsum dolor sit amet, consectetur.</h4>
                        <div id="contact-icons">
                            <AiOutlineFacebook size={45}/>
                            <AiOutlineInstagram size={45}/>
                            <AiOutlineWhatsApp size={45}/>
                        </div>

                        <div id="contact-logo">
                            <img src={logo}/>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;

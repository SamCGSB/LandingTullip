import React, {Component} from 'react';
import tablet from '../Assets/tablet-empty.png';
import phone from '../Assets/phone-bg.png';
import {FadeIn} from 'animate-components';
import ParticlesBg from "particles-bg";

class Devices extends Component {
    render() {

        return (
            <section id="devices">
                <FadeIn>

                    <div id="devicesContainer">

                        <img id="deviceimg" src={tablet}/>
                        <img id="deviceimg2" src={phone}/>
                    </div>
                </FadeIn>
            </section>
        );
    }
}

export default Devices;

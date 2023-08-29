import React, { useState } from 'react';
import '../assets/index.css';
import { Logo } from './Logo';

function Intro({name}) {
    let [nom, cambiar] = useState(name);

    setTimeout(() => {
        cambiar(nom = "aaa")
    }, 3000);

    return (
        <div>
            <Logo />
            <div className='intro'>
                <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vel
                quos reprehenderit rerum repellendus cum aperiam consequuntur eos
                eius laudantium possimus, in vitae nulla eum blanditiis tempora
                quis ea expedita!cxvv
                </h1>
            </div>
            <h2>{nom}</h2>
            <div>
                <Welcome nombres="Sara" />
                <Welcome nombres="Cahal" />
                <Welcome nombres="Edite" />
            </div>
        </div>
    );
}
function Welcome(props) {
    return <h1>Hello, {props.nombres}</h1>;
  }

export default Intro;

import React,{ Component } from 'react';
import '../assets/index.css';

class Header extends Component {
    render() {
    let nombre = 'jose david';
    return (
        <div className="header">
        <h1>Hola, {nombre}, bienvenido a React ^_^</h1>
        <div className='nav' >
            <h2>inicio</h2>
            <h2>servicios</h2>
            <h2>contacto</h2>
        </div>
        </div>
        );
    }
}
export default Header;

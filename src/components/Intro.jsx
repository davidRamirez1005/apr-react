import React, { Component } from 'react';
import '../assets/index.css';
import { Logo } from './Logo';

class Header extends Component {
    render() {
        return (
            <div>
                <Logo />
                <div className='intro'>
                    <h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vel
                    quos reprehenderit rerum repellendus cum aperiam consequuntur eos
                    eius laudantium possimus, in vitae nulla eum blanditiis tempora
                    quis ea expedita!
                    </h1>
                </div>
                <h2>jose david</h2>
                
            </div>
        );
    }
}



export default Header;

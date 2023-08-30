import React, { useState } from 'react'
import PropTypes from "prop-types"

export default function Section({articulo, numero}) {
    
    // let [art, setcoun] = useState({articulo});
    let [num, setIncrement] = useState(Number(numero));
    
    const suma= () => {
        setIncrement(num +1);
    }
    return (
        <div>
        <h2>{articulo}</h2>
        <br />
        <button onClick={suma} >Click</button>
        <h3>{num}</h3>
        </div>
    )
}

Section.protoType = {
    numero: PropTypes.number.isRequired
};
Section.defaultProps = { 
    numero : 6
};

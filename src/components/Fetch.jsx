import React, { useState } from 'react';
import PropTypes from 'prop-types';
export default function Fetch({ info, escritura}) {
  const [p1, mostrar] = useState(info);
  const [p2, escribir] = useState(escritura);


  const objeto = async () => {
    try {
      const json = await (await fetch("https://jsonplaceholder.typicode.com/posts/1/comments")).json();
      mostrar(JSON.stringify(json));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <br />
      <button onClick={objeto}>Click</button>
      <h3>{p1}</h3>
      <br />
      <input placeholder="escribe algo"
       value={p2} onChange={(event) => { 
        escribir(event.target.value) }
        }/>
      <h1>{p2}</h1>
    </div>
  );
}

Fetch.protoTypes = {
  info: PropTypes.string,
  escritura : PropTypes.string
};

Fetch.defaultProps = {
  info: "",
  escritura : ""
};

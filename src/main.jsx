import React from 'react'
import ReactDOM from 'react-dom/client'
import Iconos from './components/Iconos'
import Header from './components/Header'
import Intro from './components/Intro'

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <Header/>
    <Intro name="hola mundo" />
    <hr />
    <div className='iconos'>
      <Iconos />
    </div>
    <hr />

  </React.StrictMode>
)
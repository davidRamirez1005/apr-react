import React from 'react'
import ReactDOM from 'react-dom/client'
import Iconos from './components/Iconos'
import Header from './components/Header'
import Intro from './components/Intro'
import Section from './components/Section'
import Fetch from './components/Fetch'

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <Header/>
    <Intro name="hola mundo" />
    <hr />
    <div className='iconos'>
      <Iconos />
    </div>
    <hr />
    <div className="section">
    <Section articulo=" deportes dsfds" />
    </div>
    <br />
    <div>
    <Fetch />
    </div>
  <br /><br /><br /><br /><br /><br /><br /><br />
  </React.StrictMode>
)
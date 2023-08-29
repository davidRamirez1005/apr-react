import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Intro from './components/Intro'

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <Header/>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <Intro name="hola mundo" />
  </React.StrictMode>
)
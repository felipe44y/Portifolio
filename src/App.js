import React from 'react'
import Header from './componentes/Header/Index'
import Nav from './componentes/Navbar'
import Dados from './componentes/Dados'
import Habilidade from './componentes/Habilidade'
import './App.css'

export default function App(){

  return(
      <div className='home'>
        <Nav/>
        <Header/>
        <Dados/>
        <Habilidade/>
      </div>
  )
}

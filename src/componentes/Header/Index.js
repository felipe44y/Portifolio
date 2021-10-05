import React from 'react'
import Particles from 'react-tsparticles'
import './style.css'

export default function Header(){
 
    return(
        <div className="perfil">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div className="nomes">
                <h1>Hello, welcome to my personal website, my name is <span id="Nome">{"<Felipe/>"}</span></h1>
                <p>Engenheiro de Software</p>
            </div> 
            <section className="foto">
                <img alt ="imgagem"src={'./perfil.svg'}/> 
            </section> 
        </div>
    )
}
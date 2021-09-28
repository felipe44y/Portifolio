import React from 'react'
import './style.css'

export default function Header(){
 
    return(
        <div className="perfil">
            <div className="nomes">
                <h1>Hello, welcome to my personal website, my name is <span>{"<Felipe/>"}</span></h1>
                <p>Engenheiro de Software</p>
            </div> 
            <section className="foto">
                <img alt ="imgagem"src={'./perfil.svg'}/> 
            </section>  
        </div>
    )
}
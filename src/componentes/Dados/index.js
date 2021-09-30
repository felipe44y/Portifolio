import React from "react";
import './style.css'

export default function Dados(){

    return(
        <div className="fora">
            <h1 id="gg">Sobre mim</h1>
            <h1 className="ff">Meu nome é <span style={{color:"#8A2BE2"}}>{"<Felipe/>"}</span></h1>
            <p className="about"><strong>Tenho 20 anos, comecei com front end em 2021, gosto muito dessa área e estou  me dedicando para sempre procura aprender novas linguagens, aproveitando cada etapa do processo de design. Sempre farei o maximo para entregar um exelente serviço.</strong></p>
            <div className="contato">
                <p><strong>Brazil</strong></p>
                <p><strong>Email: Felipelipim44@gmail.com</strong></p>
                <p><strong>Palhano-CE</strong></p>
            </div>
        </div>
    )
}
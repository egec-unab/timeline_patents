import React from 'react'
// import Unab1 from './unab1.svg'
import Unab2 from './unab2.svg'
import Minciencias from './minciencias.jpeg'
import './Footer.css'
const Footer = () => {

    const investigadores = [
        "Jhair E. Ávila-Quiroga",
        "Angie V. Pinzón-Mora",
        "Víctor A. Solarte-David",
        "Silvia M. Becerra-Bayona",
        "Maria L. Luna-González"
    ];

    return (
        <div className="footer-container">
            <div className="logo-block">
                <div className="logo-container">
                    <img src={Unab2} alt=""/>
                    <img id="logo-minciencias" src={Minciencias} alt=""/>
                </div>
            </div>

            <div className="footer-text">
                <h1>
                    <a href="https://www.unab.edu.co/investigacion/grupo-de-estudio-gen%C3%A9tico-de">
                        Universidad Autónoma de Bucaramanga
                    </a>
                </h1>
                <h2>Grupo de Estudio Genético de Enfermedades Complejas</h2>

                <h3>Authors:</h3>
                <p>
                    {
                        investigadores.join(", ")
                    }
                </p>
            </div>
        </div>
    )
}

export default Footer

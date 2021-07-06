import React from 'react'
import './css/Info.css'
import modelo from './image/modelo.png'
import Footer from './Footer'
const Info = () => {

    document.title='Gold Professional - Informacion sobre nosotros'

    return (
        <div>   
            <div className='fondo'>
                <div className='elg animate__animated animate__fadeIn'>
                </div>
                <div className="valores">
                    <div className="gr">
                        <div className="gr1">
                            <img src={modelo} className='ima-in' alt="" />
                        </div>
                        <div className="gr1">
                            <h2 className='mivi'>Mision</h2>
                            <p className='submivi'>La misión de GOLD profesional es proporcionar a nuestros consumidores los mejores productos y la mejor 
                                    experiencia de marca haciéndola única. Gracias a nuestra cartera sólida, equilibrada y complementaria, 
                                    podemos satisfacer las necesidades de todo tipo de consumidores, en todos los niveles de precios.</p>
                        </div>    
                        <div className="gr1">
                            <img src={modelo} className='ima-in' alt="" />
                        </div>
                        <div className="gr1">
                            <h2 className='mivi'>Vision</h2>
                            <p className='submivi'>En GOLD  Professional nuestra vision es apoyar a los peluqueros y desarrollar la industria del cabello 
                                    de manera sostenible y al mismo tiempo beneficiar a todos. Siempre trabajando de la manos de los estilistas
                                    profesionales</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Info

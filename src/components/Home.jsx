import React from 'react'
import './css/Home.css'
import Footer from './Footer'
import ima1 from './image/ima1 (1).jpg'
import ima2 from './image/ima1 (2).jpg'
import ima3 from './image/ima1 (3).jpg'

const Home = () => {
    
    document.title='Gold Professional'

    return (
        <div className='contenedor animate__animated animate__fadeIn'>
        <h2 className='tlt-h'>Expertos en tratamiento y cuidado capilar</h2>
        <p className='text-h'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor id, voluptate quis reiciendis facere eos! Delectus dolore beatae perspiciatis quidem?</p>
            <div className='fondo-h'>
                <div className="cont-t">
                    <h2 className='tlt-h tlt-p'>Productos para el cuidado de tu cabello.<br/> <span>Cirugias capilares y tratamientos para tu cabello</span></h2>
                </div>
            </div>
            <div className="slider">
                <ul>
                    <li><img src={ima1} className='ima-sl' alt="imagen1" /></li>
                    <li><img src={ima2} className='ima-sl' alt="imagen1" /></li>
                    <li><img src={ima3} className='ima-sl' alt="imagen1" /></li>
                </ul>
            </div>
            <Footer/>
        </div>
    )
}

export default Home

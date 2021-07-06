import React from 'react'
import './css/Produc.css'
import Profire from './Profire'
import Footer from './Footer'
import ima1 from './image/produc1.jpg'
import ima2 from './image/produc2.jpg'
import ima3 from './image/produc3.jpg'

const Products = () => {

    document.title='Gold Professional - Productos para el cuidado del cabello'
    return (
        <div className='fondo'>
            <div className="sub-f">
            <div className="slider sli2">
                <ul>
                    <li><img src={ima1} className='ima-sl' alt="imagen1" /></li>
                    <li><img src={ima2} className='ima-sl' alt="imagen1" /></li>
                    <li><img src={ima3} className='ima-sl' alt="imagen1" /></li>
                </ul>
            </div>
                <div className="fon2">
                     <h3 className='lines-effect prh3'>Productos</h3>
                </div>
            </div>    
            <Profire/>
            <Footer/>
        </div>
    )
}

export default Products

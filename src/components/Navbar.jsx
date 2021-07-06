import React from 'react'
import {Link} from 'react-router-dom'
import './css/Navbar.css'
const Navbar = () => {

function totop() {
    window.scrollTo(0,0)
}

const menu =()=>{
    const at = document.getElementById('interruptor')
    at.classList.toggle('on')
}

    return (
        <header>
            <nav>
            <div className="texto">
            <Link className='ttl' onClick={totop} to='/'>Gold</Link>
            <i onClick={menu} className="fas fa-bars menu"></i>
            <ul className='' id='interruptor'>
                <li>
                    <Link className='redi' onClick={totop, menu} to='/products'>Productos
                    <div className="bak"></div>
                    </Link>
                </li>
                 <li>
                    <Link className='redi' onClick={totop, menu} to='/tratamiento'>Tratamiento
                    <div className="bak"></div>
                    </Link>
                </li>
                 <li>
                    <Link className='redi' onClick={totop, menu} to='/locales'>Locales
                    <div className="bak"></div>
                    </Link>
                </li>
                
                <li>
                    <Link className='redi' onClick={totop, menu} to='/contact'>Contacto
                    <div className="bak"></div>
                    </Link>
                </li>
                <li>
                    <Link className='redi' onClick={totop, menu} to='/info'>¿Quienes somos?
                    <div className="bak"></div>
                    </Link>
                </li>
            </ul>
            </div>
            </nav>
        </header>
    )
}

export default Navbar

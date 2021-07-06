import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
    return (
        <footer>
            <div className="redes">
            <div className="lgri red1">
                <table class="table table-borderless">
                    <tbody>
                    <tr>
                        <td className='txtb txtb1'>Correo: </td>
                        <td className='txtb txtb1'>allan.baquej@gmail.com</td>
                    </tr>
                    <tr>
                        <td className='txtb txtb1'>Telefono:</td>
                        <td><a className='txtb txtb1' href="tel:+593 98 133 8636">+593 98 133 8636</a></td>
                    </tr>
                    <tr>
                        <td className='txtb txtb1'>Residencia:</td>
                        <td className='txtb txtb1'>Guayaquil - Ecuador</td>
                    </tr>
                    </tbody>
                </table>
                
            </div>
            
            <div className="lgri red2">
                <p className='txtb ttla'> Siguenos en nuestras redes sociales</p>
            
                <Link to='facebook'><div className="caj txtb face"><i class="fab fa-facebook-f"></i></div></Link>
                <Link to='facebook'><div className="caj txtb insta"><i class="fab fa-instagram"></i></div></Link>
                <Link to='facebook'><div className="caj txtb twt"><i class="fab fa-twitter "></i></div></Link>
                <Link to='facebook'><div className="caj txtb wsp"><i class="fab fa-whatsapp "></i></div></Link>
            </div>
        </div>
        <div className="dere">
        Created By <b>Allan Baque</b> | &copy; 2021 All rights reserved 
        </div>
        </footer>
    )
}

export default Footer

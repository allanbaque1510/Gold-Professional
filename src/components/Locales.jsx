import React,{useState, useEffect} from 'react'
import {db} from '../config/config'
import './css/Locales.css'
import Footer from './Footer'
import logo from './image/cirugia capilar.png'
const Locales = () => {
    const [listado, setlistado] = useState([])
    document.title='Gold Professional - Locales'
    const locat = async()=>{
        await db.collection('Locales').onSnapshot((query)=>{
            const dat=[]
            query.forEach((doc)=>{
                dat.push({...doc.data(), id:doc.id})
            })
            setlistado(dat)
        })
    } 
    console.log(listado)
useEffect(() => {
    locat()

},[])
    return (
        <div className='contenedor'>
            <div className="salones">
                <h3>Encuentra tu salon mas cercano <br />
                <span> Realiza tu tratamiento capilar con nuestros productos y notaras la diferencia</span>
                <br />
                    <img src={logo} alt="gold proffessional logo" className='logo'/>
                </h3>
            </div>
            <div className="grupot tarjx">
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {listado.map(datos=>{
                return(
                    <div className="col" key={datos.id}>
                        <div className="card">
                        <img src={datos.Imagen} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{datos.Nombre}</h5>
                            <p className="card-text">{datos.Direccion}</p>
                            <p className="card-text">{datos.Telefono}</p>
                            <p className="card-text"><small className="text-muted">{datos.Ciudad} - Ecuador</small></p>
                            <a href={datos.Localizacion} className="botonl">Localización <i className="fas fa-map-marker-alt"></i></a>
                        </div>
                        </div>
                    </div>
                    
                )
            })}
            </div>

            
            </div>
            <Footer/>
        </div>
    )
}

export default Locales

import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Profire from './Profire'
import { db } from '../config/config'
import './css/Espe.css'
import ima1 from './image/produc1.jpg'
import ima2 from './image/produc2.jpg'
import ima3 from './image/produc3.jpg'

const Espe = () => {
const {idit} = useParams()
const [data, setdata] = useState([])
const [titulo, settitulo] = useState('')

const lector = async()=>{
    await db.collection('Productos').onSnapshot((query)=>{
        const dat=[]
        query.forEach((doc)=>{
            dat.push({...doc.data(), id:doc.id})
        })
        let filtro = dat.filter(datos=>datos.id ===idit)
        setdata(filtro)
        settitulo(filtro[0].Nombre)
    })
}
document.title='Gold Professional - '+titulo
useEffect(() => {
    lector()
},)

    return (
        <div className='content'>
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


            <div className="cent">
                <h2 id='tit' className='lines-effect'>Datos del producto</h2>
            </div>
                {data.map(da=>{
                    return(
                    <div className="colm animate__animated animate__fadeInLeft animate__fast" key={da.id}>
                        <div className="ima-p datos">
                            <img src={da.Url} alt="" className='imag'/>
                        </div>
                        <div className="text-p datos animate__animated animate__fadeInUp animate__delay-1s animate__slow">
                            <h4>{da.Nombre}</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consectetur a amet ea porro quaerat hic nihil? Alias ea necessitatibus quas nesciunt aspernatur blanditiis vitae amet, non autem obcaecati placeat qui consequuntur dolores deleniti id excepturi maiores nihil ut impedit!</p>
                        </div>
                    </div>)
                })}
        
            
            <Profire/>
        </div>
    )
}

export default Espe

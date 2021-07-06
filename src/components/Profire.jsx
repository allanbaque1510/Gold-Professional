import React,{useState,useEffect} from 'react'
import {db} from '../config/config'
import './css/Profi.css'
import {Link} from 'react-router-dom'

const Profire = () => {

const [data, setdata] = useState([])


const basedata =async() =>{
    await db.collection('Productos').onSnapshot((query)=>{
        const datos=[]
        query.forEach((doc)=>{
            datos.push({...doc.data(), id:doc.id})
        })
        setdata(datos)
    })
}


function toTop() {
    window.scrollTo(0, 650)
}


useEffect(() => {
        basedata()
},[])

return (
        <div className="conten">

        {data[0] ?  
        <div className='seccion'>
            {data.map((datos)=>{
                return(
                    <Link to={'/product/'+datos.id} onClick={toTop} className='tarjeta' key={datos.id}>
                    
                            <img className='ima-t' src={datos.Url} alt="" />
                            <div className="tle">
                                <p className='nom-t'>{datos.Nombre}</p>
                            </div>
                    </Link>
                    
                )
            })}
        
                   
        </div>
        : <div className="loader">
        <p className='cargador'>Cargando</p>
            <div className="linea"></div>
            <div className="linea"></div>
            <div className="linea"></div>
            <div className="linea"></div>
            <div className="linea"></div>
            <div className="linea"></div>
            <div className="linea"></div>
            <div className="linea"></div>
        </div> }
        </div>
    )
}

export default Profire

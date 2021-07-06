import React from 'react'
import './css/Cont.css'
import emailjs from 'emailjs-com';
import Footer from './Footer';
const Contact = () => {

    document.title='Gold Professional - Contactanos'

const enviarEmail=(e)=>{
    e.preventDefault();

    emailjs.sendForm('service_yzppeio', 'template_u6damds', e.target, 'user_T1iDB6to6EbmIPj3faGIT')
      .then((result) => {
          alert('Mensaje enviado exitosamente', result.text)
      }, (error) => {
          alert(error.message);
      });
      e.target.reset()
   
}


    return (
        <div className='fondo-cont'>
        <div className="cont-form">
         <div className="cent">
                <h2 className='lines-effect f-t'>Formulario de consulta</h2>
            </div>
            <form className='formulario' onSubmit={enviarEmail}>
            <p className='horm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam similique dolorum eveniet ullam sequi nemo error modi obcaecati assumenda aut!</p>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control blform" required id="floatingPassword" name='nombre' placeholder="Asunto"/>
                    <label for="floatingInput">Nombre:</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control blform" required id="floatingPassword" name='apellido' placeholder="Asunto"/>
                    <label for="floatingInput">Apellido:</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control blform" required id="floatingInput" name='user_email' placeholder="name@example.com"/>
                    <label for="floatingInput">Correo electronico:</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control blform" required name="tema" id="floatingPassword" placeholder="Asunto"/>
                    <label for="floatingInput">Asunto:</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control blform" required id="floatingPassword" name='ciudad' placeholder="Asunto"/>
                    <label for="floatingInput">Localidad/Ciudad:</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control blform" id="floatingPassword" placeholder="Asunto" name='pais'/>
                    <label for="floatingInput">Pais:</label>
                </div>
                <div class="form-floating mb-3">
                    <textarea class="form-control txta blform" required rows='3' name='message' placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                    <label for="floatingTextarea2">Mensaje:</label>
                </div>
                    <input type="submit" className='form-control boton' value='Enviar' />
            </form>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Contact

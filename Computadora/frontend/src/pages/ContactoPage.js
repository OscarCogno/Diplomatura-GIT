import React from 'react';

const ContactoPage = (props) => {
    return (
      <main>
      <form className="formulario" name="form_main">
    
      
      <label className="correr" for="Información del cliente"><b>Información del cliente:</b></label>
      <fieldset>
        <p>
          <label for="Nombre">Nombre:</label>
          <input type="text" required name="nombre" placeholder="Tu nombre"/>
          
        </p>
        <p>
          <label for="Apellido">Apellido:</label>
          <input type="text" required name="apellido" placeholder="Tu apellido"/>
          
        </p>
        <p>
          <label for="Email">Email:</label>
          <input type="text" required name="email" placeholder="Email"/>
          
        </p>
      </fieldset>
      <label className="correr" for="Ingrese su mensaje"><b>Ingrese su mensaje:</b></label>
      
      <fieldset>
        <label for="text">Mensaje:</label> 
        <textarea name="text" id="text" cols="30" rows="10" oninput="contadorTexto()"></textarea> 
        <label for="caracteres">Caracteres contados:</label><span id="caracteres"></span>
        <label for="palabras">Palabras:</label><span id="palabras"></span>
        <label for="lineas">Lineas:</label><span id="lineas"></span>
        <input type="submit" value="Enviar"/>

      </fieldset>
    
      <label className="correr" for="Informacion de contacto"><b>Información de contacto: </b></label>
      <fieldset>
        <p>
          <label for="Email:"> <i
              className="fa-solid fa-envelope"></i><b><i>Email: </i></b>tuproximacompu@gmail.com</label>
        </p>
        <p>
          <label for="Celular"> <i className="fa-solid fa-mobile"></i><b><i>Celular: </i></b>3435123456</label>
        </p>
        <p>
          <label for="Teléfono Fijo"> <i className="fa-solid fa-phone"></i><b><i>Teléfono
                fijo: </i></b>4363431</label>
        </p>
        <p>
          <label for="Información de ubicación"><b>Información de ubicación:</b></label>
        </p>
        <p>
          <label for="Ubicación"><b><i>Ubicación: </i></b>Entre Ríos 3434</label>
        </p>
      </fieldset>
  </form>

  </main>
                                             
    );
  }
export default ContactoPage;
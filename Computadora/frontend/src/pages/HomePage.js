import React from 'react';
import '../styles/components/pages/estilos.css';
import '../styles/components/pages/normalize.css';

const HomePage = (props) => {
  return (
    <main>
      <div className="flex-container">
        <div>
          <h3><b>Productos</b></h3>
          <form className="formulario">


            <select>
              <option>Placa Madre</option>
              <option>Microcontrolador</option>
              <option>Discos</option>
              <option>Memoria</option>
            </select>


            </form>
            </div>
           
            
            <div>
              <h3><b>Iniciar sesión</b></h3>


              <form className="formulario">
                <p>
                  <label>Email:</label>
                  <input type="Email" autofocus placeholder="Email" required/>
                </p>
                <p>
                  <label>Contraseña:</label>
                  <input type="password" placeholder="Su contraseña" required/>
                </p>

                <input type="submit" value="Entrar" />
              </form>
              

              
              <h3>Recuperer contraseña</h3>
              <form className="formulario">
                <p>
                  <label>Email:</label>
                  <input type="Email" autofocus placeholder="Email" required />
                </p>

                <input type="submit" value="Enviar"/>
              </form>

            </div>
            
     
            <div>
              <form className="formulario">
                <h3 className="izquierda"> <b>Horarios de Atención:</b></h3>
                <li><label className="center" for="Horarios"> <i>Lunes:</i> 08:00-12:00,16:00-20:00</label></li>
                <li><label className="center" for="Horarios"><i> Martes:</i> 08:00-12:00,16:00-20:00</label></li>
                <li><label className="center" for="Horarios"><i> Miercoles:</i> 08:00-12:00,16:00-20:00</label></li>
                <li><label className="center" for="Horarios"><i> Jueves:</i> 08:00-12:00,16:00-20:00</label></li>
                <li><label className="center" for="Horarios"><i> Viernes:</i> 08:00-12:00,16:00-20:00</label></li>
                <li><label className="center" for="Horarios"><i> Sabados:</i> 08:00-12:00</label></li>
              </form>
            </div>
            
        </div>
    </main>
  );
}

export default HomePage;
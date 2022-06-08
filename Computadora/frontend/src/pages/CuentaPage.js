import React from 'react';

const CuentaPage = (props) => {
    return (
        <main>

        <h1><b>Registro de usuario</b></h1>
        
            <fieldset>
                <form className="formulario">

                    <p>
                        <legend></legend>
                        <label><i className="fa-solid fa-envelope"></i> Email:</label>
                        <input type="Email" autofocus placeholder="Email" required/>
                    </p>
                    <p>
                        <label>Contraseña:</label>
                        <input type="password" placeholder="Su contraseña" required/>
                    </p>
                    <p>
                        <label>Confirmar:</label>
                        <input type="Confirmar password" placeholder="Confirmar contraseña" required/>
                    </p>
                </form>
        </fieldset>
        <h3><b>Información personal</b></h3>
            <form className="formulario">
                <fieldset>
                    <p>
                        <legend></legend>
                        <label>Nombre:</label>
                        <input type="Nombre" placeholder="Nombre" required/>
                    </p>
                    <p>
                        <label>Apellido:</label>
                        <input type="Apellido" placeholder="Apellido" required/>
                    </p>
                    <p>
                        <label>CUIT:</label>
                        <input type="CUIT" placeholder="CUIT" required/>
                    </p>
                    <p>
                        <label> <i className="fa-solid fa-mobile"></i>Teléfono:</label>
                        <input type="Teléfono" placeholder="Teléfono" required/>
                    </p>
                   
                    <input type="submit" value="Enviar"/>
                </fieldset>
            </form>
        
        <h2>¿Por Qué Registrarse?</h2>
        <form>
            <fieldset>

                <article>Con tú registro podras comprar en nuestra tienda online</article>

            </fieldset>

        </form>

    </main>
    );
}

export default CuentaPage;
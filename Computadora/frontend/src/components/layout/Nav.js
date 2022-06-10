import { Link } from "react-router-dom";

import React from 'react';

const Nav = (props) => {
    return (
        <nav>
            {/* <button className="nav-boton" onclick="accion()">Menú</button> */}
            <ul>
               <li><Link to="/" className=" activo nav-enlace desaparece">Home</Link></li>
               <li><Link to="/Cuenta" className=" activo nav-enlace desaparece">Cuenta</Link></li>
               <li><Link to="/Empresa" className=" activo nav-enlace desaparece">Empresa</Link></li>
               <li><Link to="/Servicio-al-cliente" className=" activo nav-enlace desaparece"> Servicio al cliente</Link></li>
               <li><Link to="/Contacto" className=" activo nav-enlace desaparece">Contacto</Link></li>
               <li><Link to="/Ofertas-de-la-semana" className=" activo nav-enlace desaparece">Ofertas de la semana</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;
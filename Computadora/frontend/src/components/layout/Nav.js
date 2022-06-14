import '../../styles/components/layout/Nav.css';
import {NavLink} from "react-router-dom";

import React from 'react';

const Nav = (props) => {
    return (
        <nav>
             <button className="nav-boton" onclick="accion()">Menú</button> 
            
               <NavLink to="/" className="activo nav-enlace desaparece">Home</NavLink>
               <NavLink to="/Cuenta" className=" activo nav-enlace desaparece">Cuenta</NavLink>
               <NavLink to="/Empresa" className=" activo nav-enlace desaparece">Empresa</NavLink>
               <NavLink to="/Servicio-al-cliente" className=" activo nav-enlace desaparece"> Servicio al cliente</NavLink>
               <NavLink to="/Contacto" className=" activo nav-enlace desaparece">Contacto</NavLink>
               <NavLink to="/Ofertas-de-la-semana" className=" activo nav-enlace desaparece">Ofertas de la semana</NavLink>
            
        </nav>
    );
}

export default Nav;
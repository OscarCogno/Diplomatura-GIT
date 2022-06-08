import React from 'react';

const OfertasPage = (props) => {
  return (
    <main>
      <div className="titulo">Ofertas de la semana</div>
      <div className="container">
        <div className="caja "><img src="img/tablet (2).jpg" alt="Tablet" /><p>Tablet</p><p>Precio: $12000</p></div>
        <div className="caja "><img src="img/galeria2.jpg" alt="Notebook" /><p>Notebook</p><p>Precio: $80000</p></div>
        <div className="caja "><img src="img/mesa.jpg" alt="Mobiliario" /><p>Mobiliario</p><p>Precio: $20000</p></div>
      </div>


    </main>
  );
}

export default OfertasPage;
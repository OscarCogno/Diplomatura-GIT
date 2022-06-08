import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import ContactoPage from './pages/ContactoPage';
import EmpresaPage from './pages/EmpresaPage';
import HomePage from './pages/HomePage';
import OfertasPage from './pages/OfertasPage';
import CuentaPage from './pages/CuentaPage';
import ServicioPage from './pages/ServicioPage';

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Empresa" element={<EmpresaPage />} />
          <Route path="Contacto" element={<ContactoPage />} />
          <Route path="Ofertas de la semana" element={<OfertasPage />} />
          <Route path="Cuenta" element={<CuentaPage />} />
          <Route path="Servicio al Cliente" element={<ServicioPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

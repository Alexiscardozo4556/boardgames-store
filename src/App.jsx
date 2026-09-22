import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/footer/Footer"; 

function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "5rem" }}>
      <h1>404 - Página No Encontrada</h1>
      <p>El juego que buscas está en otro castillo. 🏰</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      {/* El Navbar queda por fuera de Routes para que sea persistente en todas las vistas */}
      <Navbar />
      
      <Routes>
        {/* Ruta Inicio: Muestra todos los productos */}
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda de juegos de mesa!" />} />
        
        {/* Ruta Categorías: Filtra dinámicamente los productos */}
        <Route path="/category/:id" element={<ItemListContainer greeting="Filtrando por categoría" />} />
        
        {/* Ruta Detalle: Muestra la info completa de un juego */}
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        
        {/* Ruta de Error: Captura cualquier URL inexistente */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
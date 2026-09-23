import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart"; 
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
      <Navbar />
      
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda de juegos de mesa!" />} />
        <Route path="/category/:id" element={<ItemListContainer greeting="Filtrando por categoría" />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
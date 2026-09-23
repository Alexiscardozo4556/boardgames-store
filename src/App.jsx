import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext"; // Importamos Auth
import Navbar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart"; 
import Auth from "./components/Auth/Auth";
import Checkout from "./components/Checkout/Checkout";
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
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda de juegos de mesa!" />} />
            <Route path="/category/:id" element={<ItemListContainer greeting="Filtrando por categoría" />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
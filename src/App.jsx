import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/NavBar/Navbar";
import Hero from "./components/Hero/Hero"; 
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart"; 
import Auth from "./components/Auth/Auth";
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/footer/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TopBanner() {
  return (
    <div style={{ 
      backgroundColor: "#111111", 
      color: "#ffffff", 
      fontSize: "0.75rem", 
      padding: "0.5rem 1rem", 
      textAlign: "center", 
      fontWeight: "bold", 
      letterSpacing: "1px",
      textTransform: "uppercase"
    }}>
      🚚 ¡Envío gratis en compras mayores a $60.000! • 3 Cuotas sin interés 🎲
    </div>
  );
}

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
          <TopBanner />
          <Navbar />
          
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <ItemListContainer greeting="¡Bienvenido a nuestra tienda de juegos de mesa!" />
              </>
            } />
            
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
      <ToastContainer position="top-right" autoClose={3000} theme="colored" limit={3} />
    </AuthProvider>
  );
}

export default App;

import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { db } from "../../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { Navigate } from "react-router-dom";

function Checkout() {
const { cart, totalPrice, clear } = useCart();
const { user } = useAuth();
const [nombre, setNombre] = useState("");
const [telefono, setTelefono] = useState("");
const [orderId, setOrderId] = useState(null);
const [loading, setLoading] = useState(false);

if (!user) {
    return <Navigate to="/login" />;
}

if (cart.length === 0 && !orderId) {
    return <h2 style={{ textAlign: "center", padding: "5rem" }}>No hay elementos en tu carrito.</h2>;
}

const handleOrder = async (e) => {
    e.preventDefault();
    setLoading(false);

    const order = {
    buyer: {
        name: nombre,
        phone: telefono,
        email: user.email 
    },
    items: cart.map(p => ({ id: p.id, name: p.name, price: p.price, quantity: p.quantity })),
    total: totalPrice,
    date: Timestamp.fromDate(new Date())
    };

    setLoading(true);
    try {
    const ordersRef = collection(db, "orders");
    const docRef = await addDoc(ordersRef, order);
    setOrderId(docRef.id); 
    clear(); 
    } catch (error) {
    console.error("Error al generar la orden:", error);
    } finally {
    setLoading(false);
    }
};

if (orderId) {
    return (
    <div style={{ textAlign: "center", padding: "5rem" }}>
        <h2>¡Gracias por tu compra! 🎉</h2>
        <p>Tu orden ha sido registrada con éxito.</p>
        <p>Código de seguimiento: <strong>{orderId}</strong></p>
    </div>
    );
}

return (
    <div style={{ textAlign: "center", padding: "3rem" }}>
    <h2>Finalizar Compra</h2>
    <p>Usuario: {user.email}</p>
    <form onSubmit={handleOrder} style={{ display: "flex", flexDirection: "column", maxWidth: "300px", margin: "2rem auto", gap: "1rem" }}>
        <input type="text" placeholder="Nombre completo" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        <input type="tel" placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
        <button type="submit" disabled={loading} style={{ backgroundColor: "green", color: "white", padding: "0.7rem", border: "none", fontWeight: "bold" }}>
        {loading ? "Procesando..." : "Confirmar Pedido"}
        </button>
    </form>
    </div>
);
}

export default Checkout;
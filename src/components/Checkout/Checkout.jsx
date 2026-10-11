import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { db } from "../../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { Navigate, Link } from "react-router-dom";
// 🚀 EFECTO PREMIUM: Importamos el disparador de fuegos artificiales digitales
import confetti from "canvas-confetti";

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
        return (
            <div style={{ textAlign: "center", padding: "6rem 2rem", fontFamily: "sans-serif" }}>
                <h2>No hay elementos en tu carrito 🛒❌</h2>
                <p style={{ color: "#777", marginBottom: "1.5rem" }}>Necesitás tener juegos en tu pedido para poder proceder al pago.</p>
                <Link to="/" style={{ backgroundColor: "orange", color: "white", padding: "0.7rem 1.5rem", borderRadius: "6px", textDecoration: "none", fontWeight: "bold" }}>
                    Volver al catálogo
                </Link>
            </div>
        );
    }

    const handleOrder = async (e) => {
        e.preventDefault();
        setLoading(false);

        const order = {
            buyer: {
                name: nombre.trim(),
                phone: telefono.trim(),
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
            clear(); // Vacía el carrito

            // 🌟 DISPARADOR DEL EFECTO CONFETI (Estilo Nike/Celebración)
            confetti({
                particleCount: 150,
                spread: 80,
                origin: { y: 0.6 }
            });

        } catch (error) {
            console.error("Error al generar la orden:", error);
        } finally {
            setLoading(false);
        }
    };

    // PANTALLA DE ÉXITO PREMIUM
    if (orderId) {
        return (
            <div style={{
                textAlign: "center",
                padding: "5rem 1.5rem",
                fontFamily: "'Segoe UI', Roboto, sans-serif",
                maxWidth: "600px",
                margin: "3rem auto",
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                border: "1px solid #eef2f5"
            }}>
                <h2 style={{ color: "#27ae60", fontSize: "2.2rem", margin: "0 0 1rem 0" }}>¡Gracias por tu compra! 🎉🥳</h2>
                <p style={{ fontSize: "1.1rem", color: "#555", margin: "0 0 2rem 0" }}>Tu orden ha sido registrada con éxito en los servidores de Google.</p>

                <div style={{ backgroundColor: "#f8f9fa", padding: "1.5rem", borderRadius: "8px", border: "1px solid #e4e7eb", marginBottom: "2rem" }}>
                    <span style={{ fontSize: "0.9rem", color: "#7f8c8d", display: "block", marginBottom: "0.5rem", textTransform: "uppercase", fontWeight: "bold" }}>Código de seguimiento oficial</span>
                    <strong style={{ fontSize: "1.3rem", color: "#2c3e50", letterSpacing: "1px", wordBreak: "break-all" }}>{orderId}</strong>
                </div>

                <Link to="/" style={{ display: "inline-block", backgroundColor: "orange", color: "white", padding: "0.9rem 2rem", borderRadius: "8px", textDecoration: "none", fontWeight: "bold", transition: "background-color 0.2s" }}>
                    Seguir comprando juegos 🎲
                </Link>
            </div>
        );
    }

    // FORMULARIO DE FACTURACIÓN RESPONSIVO BLINDADO
    return (
        <div style={{
            padding: "3rem 1.5rem",
            fontFamily: "'Segoe UI', Roboto, sans-serif",
            maxWidth: "450px",
            margin: "3rem auto",
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
            border: "1px solid #eef2f5",
            boxSizing: "border-box"
        }}>
            <h2 style={{ color: "#2c3e50", fontSize: "1.8rem", margin: "0 0 0.5rem 0", fontWeight: "700" }}>Finalizar Compra</h2>
            <p style={{ color: "#7f8c8d", fontSize: "0.9rem", margin: "0 0 2rem 0" }}>Facturando como: <strong>{user.email}</strong></p>

            <form onSubmit={handleOrder} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                <div style={{ textAlign: "left" }}>
                    <label style={{ fontSize: "0.85rem", fontWeight: "bold", color: "#555", display: "block", marginBottom: "0.4rem" }}>Nombre del destinatario</label>
                    <input
                        type="text"
                        placeholder="Ej: Alexis Cardozo"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                        style={{ width: "100%", padding: "0.8rem", borderRadius: "6px", border: "1px solid #ccc", boxSizing: "border-box", fontSize: "1rem" }}
                    />
                </div>

                <div style={{ textAlign: "left" }}>
                    <label style={{ fontSize: "0.85rem", fontWeight: "bold", color: "#555", display: "block", marginBottom: "0.4rem" }}>Teléfono de contacto</label>
                    <input
                        type="tel"
                        placeholder="Ej: 1123456789"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        required
                        style={{ width: "100%", padding: "0.8rem", borderRadius: "6px", border: "1px solid #ccc", boxSizing: "border-box", fontSize: "1rem" }}
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        backgroundColor: loading ? "#7f8c8d" : "#27ae60",
                        color: "white",
                        padding: "1rem",
                        border: "none",
                        fontWeight: "bold",
                        borderRadius: "6px",
                        fontSize: "1.1rem",
                        cursor: loading ? "not-allowed" : "pointer",
                        boxShadow: "0 4px 10px rgba(39, 174, 96, 0.15)",
                        marginTop: "1rem",
                        transition: "all 0.1s ease"
                    }}
                    // Efecto elástico al presionar estilo pulsador físico
                    onMouseDown={(e) => !loading && (e.currentTarget.style.transform = "scale(0.96)")}
                    onMouseUp={(e) => !loading && (e.currentTarget.style.transform = "scale(1)")}
                >
                    {loading ? "Procesando orden..." : "🔒 Confirmar Pedido Seguro"}
                </button>
            </form>
        </div>
    );
}

export default Checkout;
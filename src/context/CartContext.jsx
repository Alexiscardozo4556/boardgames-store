import { createContext, useContext, useState } from "react";
// 1. IMPORTAMOS EL DISPARADOR DE ALERTAS FLOTANTES
import { toast } from "react-toastify";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addItem = (productToAdd, quantity) => {
        setCart((prev) => {
            const existe = prev.find((p) => p.id === productToAdd.id);

            if (existe) {
                // Control opcional por si agregan más del stock desde el detalle
                const nuevaCantidad = existe.quantity + quantity;
                if (nuevaCantidad > productToAdd.stock) {
                    toast.error(`¡Acción cancelada! No podés superar las ${productToAdd.stock} unidades en stock.`);
                    return prev;
                }
                toast.success(`¡Agregado con éxito!`);
                return prev.map((p) =>
                    p.id === productToAdd.id ? { ...p, quantity: nuevaCantidad } : p
                );
            }

            toast.success(`¡Juego añadido al carrito! 🎉`);
            return [...prev, { ...productToAdd, quantity }];
        });
    };

    const removeItem = (id) => {
        setCart((prev) => prev.filter((p) => p.id !== id));
        toast.info("Producto eliminado del pedido.");
    };

    const clear = () => {
        setCart([]);
        toast.info("Carrito vaciado por completo.");
    };

    const isInCart = (id) => cart.some((p) => p.id === id);
    const totalItems = cart.reduce((acc, p) => acc + p.quantity, 0);
    const totalPrice = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);

    const decreaseQuantity = (id) => {
        setCart((prev) =>
            prev
                .map((p) => (p.id === id ? { ...p, quantity: p.quantity - 1 } : p))
                .filter((p) => p.quantity > 0)
        );
    };

    // 2. FUNCIÓN DE SUMAR MODIFICADA CON TOASTIFY
    const increaseQuantity = (id) => {
        setCart((prev) =>
            prev.map((p) => {
                if (p.id === id) {
                    if (p.quantity < p.stock) {
                        return { ...p, quantity: p.quantity + 1 };
                    } else {
                        // REEMPLAZO DEFINITIVO: Cambiamos alert por un toast naranja hermoso
                        toast.warning(`¡Límite alcanzado! Solo hay ${p.stock} unidades de este juego.`);
                    }
                }
                return p;
            })
        );
    };

    return (
        <CartContext.Provider
            value={{ cart, addItem, removeItem, clear, isInCart, totalItems, totalPrice, decreaseQuantity, increaseQuantity }}
        >
            {children}
        </CartContext.Provider>
    );
}
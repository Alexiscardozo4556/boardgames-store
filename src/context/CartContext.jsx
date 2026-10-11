import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
const [cart, setCart] = useState([]);

const addItem = (productToAdd, quantity) => {
    setCart((prev) => {
    const existe = prev.find((p) => p.id === productToAdd.id);
    
    if (existe) {
        return prev.map((p) =>
        p.id === productToAdd.id ? { ...p, quantity: p.quantity + quantity } : p
        );
    }

    return [...prev, { ...productToAdd, quantity }];
    });
};

const removeItem = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
};

const clear = () => setCart([]);

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

const increaseQuantity = (id) => {
    setCart((prev) =>
    prev.map((p) => {
        if (p.id === id) {
        if (p.quantity < p.stock) {
            return { ...p, quantity: p.quantity + 1 };
        } else {
            alert(`¡Límite alcanzado! Solo hay ${p.stock} unidades en stock.`);
        }
        }
        return p;
    })
    );
};

return (
    <CartContext.Provider 
    value={{ 
        cart, 
        addItem, 
        removeItem, 
        clear, 
        isInCart, 
        totalItems, 
        totalPrice, 
        decreaseQuantity, 
        increaseQuantity 
    }}
    >
    {children}
    </CartContext.Provider>
);
}
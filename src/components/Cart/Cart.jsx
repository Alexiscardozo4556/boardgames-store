import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import styles from "./Cart.module.css";

function Cart() {
    const { cart, removeItem, clear, totalPrice, decreaseQuantity, increaseQuantity } = useCart();

    if (cart.length === 0) {
        return (
            <div className={styles.emptyContainer}>
                <h2>Tu carrito de compras está vacío 🛒❌</h2>
                <p>Parece que todavía no agregaste ningún juego a tu colección.</p>
                <Link to="/" className={styles.returnButton}>
                    Volver al catálogo de juegos
                </Link>
            </div>
        );
    }

    return (
        <div className={styles.cartContainer}>
            <h2>Tu Pedido de Juegos de Mesa</h2>

            <div className={styles.itemsList}>
                {cart.map((product) => (
                    <div key={product.id} className={styles.cartItem}>
                        <img src={product.img} alt={product.name} className={styles.itemImage} />

                        <div className={styles.itemDetails}>
                            <h3>{product.name}</h3>
                            <p className={styles.itemCategory}>{product.category}</p>

                            {/* SELECTOR INTERACTIVO DE CANTIDAD MODERNO */}
                            <div className={styles.quantityContainer}>
                                <span>Cantidad:</span>
                                <button
                                    onClick={() => decreaseQuantity(product.id)}
                                    className={styles.quantityBtn}
                                >
                                    -
                                </button>
                                <strong className={styles.quantityCount}>{product.quantity}</strong>
                                <button
                                    onClick={() => increaseQuantity(product.id)}
                                    className={styles.quantityBtn}
                                >
                                    +
                                </button>
                            </div>

                            <p>Precio Unitario: ${product.price.toLocaleString()}</p>
                            <p className={styles.subtotal}>Subtotal: ${(product.price * product.quantity).toLocaleString()}</p>
                        </div>

                        <button className={styles.deleteButton} onClick={() => removeItem(product.id)}>
                            ❌ Eliminar
                        </button>
                    </div>
                ))}
            </div>

            <div className={styles.summarySection}>
                <h3>Total General: ${totalPrice.toLocaleString()}</h3>
                <div className={styles.actions}>
                    <button className={styles.clearButton} onClick={clear}>
                        Vaciar Carrito🗑️
                    </button>

                    <Link to="/checkout" className={styles.checkoutButton} style={{ textDecoration: "none" }}>
                        Proceder al Checkout 💳
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Cart;
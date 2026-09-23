import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext"; 
import styles from "./CartWidget.module.css";

function CartWidget() {
const { totalItems } = useCart();

return (
    <Link to="/cart" className={styles.cartWidget}>
    🛒 
    {totalItems > 0 && <span className={styles.cartCount}>{totalItems}</span>}
    </Link>
);
}

export default CartWidget;




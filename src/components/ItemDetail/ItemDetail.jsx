import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext"; 
import ItemCount from "../ItemCount/ItemCount";
import styles from "./ItemDetail.module.css";

function ItemDetail({ product }) {
const [goToCart, setGoToCart] = useState(false);
const { addItem } = useCart();

const handleOnAdd = (quantity) => {
    // Agregamos estas dos líneas para espiar el error en la consola
    console.log("1. Producto recibido en Detail:", product);
    console.log("2. Función addItem del contexto:", addItem);

    setGoToCart(true);
    addItem(product, quantity); 
};


return (
    <article className={styles.detailContainer}>
    <div className={styles.imageSection}>
        <img src={product.img} alt={product.name} className={styles.image} />
    </div>

    <div className={styles.infoSection}>
        <p className={styles.category}>{product.category}</p>
        <h1 className={styles.name}>{product.name}</h1>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.price}>\${product.price.toLocaleString()}</p>
        <p className={styles.stock}>Stock disponible: {product.stock} unidades</p>
        
        {goToCart ? (
        <Link to="/cart" className={styles.finishButton}>
            Finalizar Compra (Ir al carrito)
        </Link>
        ) : (
        <ItemCount stock={product.stock} onAdd={handleOnAdd} />
        )}
    </div>
    </article>
);
}

export default ItemDetail;
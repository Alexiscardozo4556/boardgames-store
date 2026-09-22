import React from "react";
import { Link } from "react-router-dom";
import styles from "./Item.module.css"; 

function Item({ product }) {
return (
    <article className={styles.card}>
    <img src={product.img} alt={product.name} className={styles.image} />
    <h3 className={styles.name}>{product.name}</h3>
    <p className={styles.category}>{product.category}</p>
    <p className={styles.price}>\${product.price.toLocaleString()}</p>
    <p className={styles.stock}>Stock disponible: {product.stock}</p>

      {/* Modificación clave: Envolvemos el botón en un Link dinámico */}
    <Link to={`/item/${product.id}`} className={styles.buttonLink}>
        <button className={styles.button}>Ver detalle</button>
    </Link>
    </article>
);
}

export default Item;
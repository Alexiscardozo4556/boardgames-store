import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import styles from "./ItemDetail.module.css";

function ItemDetail({ product }) {
const handleOnAdd = (quantity) => {
    console.log(`Agregados ${quantity} unidades de ${product.name} al carrito`);
};

return (
    <article className={styles.detailContainer}>
      {/* Sector 1: Imagen Principal */}
    <div className={styles.imageSection}>
        <img src={product.img} alt={product.name} className={styles.image} />
    </div>

      {/* Sector 2: Bloque de Información Completa */}
    <div className={styles.infoSection}>
        <p className={styles.category}>{product.category}</p>
        <h1 className={styles.name}>{product.name}</h1>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.price}>\${product.price.toLocaleString()}</p>
        <p className={styles.stock}>Stock disponible: {product.stock} unidades</p>
        
        {/* Reutilización del ItemCount pasándole el stock del producto de forma dinámica */}
        <ItemCount stock={product.stock} onAdd={handleOnAdd} />
    </div>
    </article>
);
}

export default ItemDetail;
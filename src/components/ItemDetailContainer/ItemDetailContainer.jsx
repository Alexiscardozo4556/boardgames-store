import React, { useState, useEffect } from "react";
import { getProductById } from "../../mock/asyncMock"; // Doble subida: sale de la carpeta y de components
import ItemDetail from "../ItemDetail/ItemDetail";
import styles from "./ItemDetailContainer.module.css";

function ItemDetailContainer() {
const [product, setProduct] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
    // Quemamos temporalmente el ID "1" (Catan) como pide la consigna hasta usar React Router
    getProductById("1")
    .then((data) => {
        setProduct(data);
    })
    .catch((error) => {
        console.error("Error al obtener detalle del producto:", error);
    })
    .finally(() => {
        setLoading(false);
    });
}, []);

return (
    <section className={styles.container}>
    {loading ? (
        <p className={styles.loading}>Cargando detalles del juego...</p>
    ) : product ? (
        <ItemDetail product={product} />
    ) : (
        <p className={styles.error}>El juego solicitado no existe.</p>
    )}
    </section>
);
}

export default ItemDetailContainer;
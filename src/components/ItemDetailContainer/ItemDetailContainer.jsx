import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../mock/asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import styles from "./ItemDetailContainer.module.css";

function ItemDetailContainer() {
const [product, setProduct] = useState(null);
const [loading, setLoading] = useState(true);

const { id } = useParams();

useEffect(() => {
    setLoading(true);
    
    getProductById(id)
    .then((data) => {
        setProduct(data);
    })
    .catch((error) => {
        console.error("Error al obtener detalle del producto:", error);
    })
    .finally(() => {
        setLoading(false);
    });
}, [id]); 

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
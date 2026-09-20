import React, { useState, useEffect } from "react";
import { getProducts } from "../mock/asyncMock";
import ItemList from "./ItemList";
import styles from "./ItemListContainer.module.css";

function ItemListContainer({ greeting }) {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
    getProducts()
    .then((data) => {
        setProducts(data);
    })
    .catch((error) => {
        console.error("Error al cargar productos:", error);
    })
    .finally(() => {
        setLoading(false);
    });
}, []);

return (
    <section className={styles.itemListContainer}>
    <h2>{greeting}</h2>
    
    {loading ? (
        <p className={styles.loading}>Cargando catálogo de juegos...</p>
    ) : (
        <ItemList products={products} />
    )}
    </section>
);
}

export default ItemListContainer;


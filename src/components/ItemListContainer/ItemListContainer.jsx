import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../../mock/asyncMock";
import ItemList from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.css";

function ItemListContainer({ greeting }) {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);


const { id } = useParams();

useEffect(() => {
    setLoading(true);
    
    
    const asyncFunc = id ? getProductsByCategory(id) : getProducts();

    asyncFunc
    .then((data) => {
        setProducts(data);
    })
    .catch((error) => {
        console.error("Error al cargar productos:", error);
    })
    .finally(() => {
        setLoading(false);
    });
}, [id]); 

return (
    <section className={styles.itemListContainer}>
    <h2>{id ? `Categoría: ${id}` : greeting}</h2>
    
    {loading ? (
        <p className={styles.loading}>Cargando catálogo de juegos...</p>
    ) : (
        <ItemList products={products} />
    )}
    </section>
);
}

export default ItemListContainer;

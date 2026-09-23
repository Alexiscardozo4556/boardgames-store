import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import ItemList from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.css";

function ItemListContainer({ greeting }) {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const { id } = useParams();

useEffect(() => {
    setLoading(true);
    const productsRef = collection(db, "products");
    
    
    const q = id 
    ? query(productsRef, where("category", "==", id)) 
    : productsRef; 

    getDocs(q)
    .then((snapshot) => {
        const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
        }));
        setProducts(docs);
    })
    .catch((error) => console.error("Error Firestore:", error))
    .finally(() => setLoading(false));
}, [id]);

return (
    <section className={styles.itemListContainer}>
    <h2>{id ? `Categoría: ${id}` : greeting}</h2>
    
    {loading ? (
        <p className={styles.loading}>Cargando catálogo desde Firestore...</p>
    ) : (
        <ItemList products={products} />
    )}
    </section>
);
}

export default ItemListContainer;
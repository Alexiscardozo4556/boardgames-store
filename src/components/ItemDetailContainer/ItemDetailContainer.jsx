import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";
import styles from "./ItemDetailContainer.module.css";

function ItemDetailContainer() {
const [product, setProduct] = useState(null);
const [loading, setLoading] = useState(true);
const { id } = useParams();

useEffect(() => {
    setLoading(true);
    
    const docRef = doc(db, "products", id);
    
    getDoc(docRef)
    .then((snapshot) => {
        if (snapshot.exists()) {
        setProduct({ id: snapshot.id, ...snapshot.data() });
        } else {
        setProduct(null);
        }
    })
    .catch((error) => console.error("Error al traer detalle:", error))
    .finally(() => setLoading(false));
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
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import ItemList from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.css";

function ItemListContainer({ greeting }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id: categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        setError(null);

        const productsRef = collection(db, "products");
        let q;

        if (categoryId) {
            // 1. SI HAY CATEGORÍA: Filtramos estrictamente por esa sección en el servidor
            q = query(productsRef, where("category", "==", categoryId));
        } else {
            // 2. SI ES EL INICIO GENERAL: Traemos la colección completa para filtrar localmente y evitar fallas
            q = productsRef;
        }

        getDocs(q)
            .then((querySnapshot) => {
                const docs = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                if (!categoryId) {
                    // 🔥 FILTRADO INTELIGENTE PARA EL INICIO:
                    // Busca los que tengan showInHome true (ya sea booleano o string)
                    let destacados = docs.filter(p => p.showInHome === true || p.showInHome === "true");

                    // SALVAVIDAS: Si por algún error en Firebase nadie tiene la propiedad, toma los primeros 4 juegos para no dejar la pantalla en blanco
                    if (destacados.length === 0) {
                        destacados = docs.slice(0, 4);
                    } else if (destacados.length < 4) {
                        // Si hay destacados pero son menos de 4, rellena con los otros juegos hasta completar los 4 solicitados
                        const extras = docs.filter(p => !destacados.some(d => d.id === p.id));
                        destacados = [...destacados, ...extras].slice(0, 4);
                    } else {
                        // Si hay más de 4 destacados, corta exactamente en 4 para mantener la simetría premium
                        destacados = destacados.slice(0, 4);
                    }

                    setProducts(destacados);
                } else {
                    setProducts(docs);
                }
            })
            .catch((err) => {
                console.error("Error al conectar con Firestore:", err);
                setError("Hubo un problema al cargar los juegos de mesa.");
            })
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId]);

    // RESPUESTA VISUAL DE CARGA PREMIUM (SKELETON LOADERS EMBEBIDOS)
    if (loading) {
        return (
            <div className={styles.itemListContainer}>
                <h2>Preparando la vidriera...</h2>
                <div className={styles.grid || "grid"} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "2rem", width: "100%" }}>
                    {[1, 2, 3, 4].map((n) => (
                        <div key={n} className={styles.skeletonCard}>
                            <div className={styles.skeletonImg}></div>
                            <div className={styles.skeletonLine}></div>
                            <div className={styles.skeletonLineShort}></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.itemListContainer}>
                <h2 style={{ color: "#e74c3c", textAlign: "center", marginTop: "3rem" }}>{error}</h2>
            </div>
        );
    }

    return (
        <div className={styles.itemListContainer}>
            {/* Título adaptable premium */}
            <h2>{categoryId ? categoryId : "🔥 Productos Destacados de la Semana"}</h2>

            {products.length === 0 ? (
                <p style={{ textAlign: "center", color: "#666", fontSize: "1.1rem", marginTop: "2rem" }}>
                    Próximamente ingresarán nuevos juegos a esta sección. 🎲
                </p>
            ) : (
                <ItemList products={products} />
            )}
        </div>
    );
}

export default ItemListContainer;
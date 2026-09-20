import React from "react";
import Item from "./Item";
import styles from "./ItemList.module.css";

function ItemList({ products }) {
return (
    <div className={styles.grid}>
    {products.map((product) => (
        <Item key={product.id} product={product} />
    ))}
    </div>
);
}

export default ItemList;

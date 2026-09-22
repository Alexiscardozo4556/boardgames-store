import React, { useState } from "react";
import styles from "./ItemCount.module.css";

function ItemCount({ stock, initial = 1, onAdd }) {
const [count, setCount] = useState(initial);

const increment = () => {
    if (count < stock) {
    setCount(count + 1);
    }
};

const decrement = () => {
    if (count > 1) { // Límite para no bajar de 1 item
    setCount(count - 1);
    }
};

return (
    <div className={styles.counterContainer}>
    <div className={styles.controls}>
        <button className={styles.button} onClick={decrement} disabled={count <= 1}>-</button>
        <span className={styles.count}>{count}</span>
        <button className={styles.button} onClick={increment} disabled={count >= stock}>+</button>
    </div>
    <button 
        className={styles.addButton} 
        onClick={() => onAdd(count)} 
        disabled={stock === 0}
    >
        {stock === 0 ? "Sin stock" : "Agregar al carrito"}
    </button>
    </div>
);
}

export default ItemCount;
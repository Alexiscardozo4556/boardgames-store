import styles from "./ItemListContainer.module.css";

function ItemListContainer({ greeting }) {
    return (
    <section className={styles.itemListContainer}>
    <h2>{greeting}</h2>
    </section>
    );
}

export default ItemListContainer;

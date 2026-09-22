import styles from "./CartWidget.module.css";

function CartWidget() {
    return (
    <div className={styles.cartWidget}>
    🛒 <span className={styles.cartCount}>3</span>
    </div>
    );
}

export default CartWidget;




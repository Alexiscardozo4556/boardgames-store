import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";

function Navbar() {
return (
    <nav className={styles.navbar}>
    <h1 className={styles.logo}>Boardgames</h1>
    <ul className={styles.navLinks}>
        <li>Juegos de mesa</li>
        <li>Cartas</li>
        <li>Puzzles</li>
    </ul>
    <CartWidget />
    </nav>
    );
}

export default Navbar;


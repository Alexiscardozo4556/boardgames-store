import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";

function Navbar() {
return (
    <nav className={styles.navbar}>
      {/* El logo redirige siempre al inicio */}
    <Link to="/" className={styles.logoLink}>
        <h1 className={styles.logo}>Boardgames</h1>
    </Link>
    
    <ul className={styles.navLinks}>
        <li>
        <NavLink to="/category/Juegos de mesa" className={({ isActive }) => isActive ? styles.activeLink : ""}>
            Juegos de mesa
        </NavLink>
        </li>
        <li>
        <NavLink to="/category/Cartas" className={({ isActive }) => isActive ? styles.activeLink : ""}>
            Cartas
        </NavLink>
        </li>
        <li>
        <NavLink to="/category/Puzzles" className={({ isActive }) => isActive ? styles.activeLink : ""}>
            Puzzles
        </NavLink>
        </li>
    </ul>
    <CartWidget />
    </nav>
);
}

export default Navbar;

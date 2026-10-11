import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; 
import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";

function Navbar() {
const authContext = useAuth();
const user = authContext ? authContext.user : null;
const logoutUser = authContext ? authContext.logoutUser : () => {};

  // Estado para abrir y cerrar el menú hamburguesa en celulares
const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => {
    setMenuOpen(!menuOpen);
};

return (
    <nav className={styles.navbar}>
      {/* Logo principal */}
    <Link to="/" className={styles.logoLink} onClick={() => setMenuOpen(false)}>
        <h1 className={styles.logo}>Boardgames</h1>
    </Link>
    
      {/* Botón Hamburguesa (solo visible en celulares) */}
    <button className={styles.hamburger} onClick={toggleMenu}>
        <span className={`${styles.bar} ${menuOpen ? styles.open1 : ""}`}></span>
        <span className={`${styles.bar} ${menuOpen ? styles.open2 : ""}`}></span>
        <span className={`${styles.bar} ${menuOpen ? styles.open3 : ""}`}></span>
    </button>

      {/* Enlaces de categorías dinámicos */}
    <ul className={`${styles.navLinks} ${menuOpen ? styles.activeMenu : ""}`}>
        <li>
        <NavLink 
            to="/category/Juegos de mesa" 
            className={({ isActive }) => isActive ? styles.activeLink : ""}
            onClick={() => setMenuOpen(false)}
        >
            Juegos de mesa
        </NavLink>
        </li>
        <li>
        <NavLink 
            to="/category/Cartas" 
            className={({ isActive }) => isActive ? styles.activeLink : ""}
            onClick={() => setMenuOpen(false)}
        >
            Cartas
        </NavLink>
        </li>
        <li>
        <NavLink 
            to="/category/Puzzles" 
            className={({ isActive }) => isActive ? styles.activeLink : ""}
            onClick={() => setMenuOpen(false)}
        >
            Puzzles
        </NavLink>
        </li>
    </ul>

      {/* Sección de autenticación y carrito */}
    <div className={styles.rightSection}>
        {user && user.email ? (
        <div className={styles.userInfo}>
            <span>👤 {user.email}</span>
            <button onClick={logoutUser} className={styles.logoutBtn}>Salir</button>
        </div>
        ) : (
        <Link to="/login" className={styles.loginBtn} onClick={() => setMenuOpen(false)}>
            Ingresar
        </Link>
        )}
        <CartWidget />
    </div>
    </nav>
);
}

export default Navbar;
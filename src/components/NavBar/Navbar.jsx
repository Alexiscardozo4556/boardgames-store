import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; 
import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";

function Navbar() {
const authContext = useAuth();
const user = authContext ? authContext.user : null;
const logoutUser = authContext ? authContext.logoutUser : () => {};
const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => {
    setMenuOpen(!menuOpen);
};

return (
    <nav className={styles.navbar}>
      {/* LADO IZQUIERDO: Logo */}
    <Link to="/" className={styles.logoLink} onClick={() => setMenuOpen(false)}>
        <h1 className={styles.logo}>Boardgames</h1>
    </Link>
    
      {/* MENÚ DESPLEGABLE (Categorías + Autenticación en Celulares) */}
    <div className={`${styles.menuWrapper} ${menuOpen ? styles.activeMenu : ""}`}>
        <ul className={styles.navLinks}>
        <li>
            <NavLink to="/category/Juegos de mesa" className={({ isActive }) => isActive ? styles.activeLink : ""} onClick={() => setMenuOpen(false)}>
            Juegos de mesa
            </NavLink>
        </li>
        <li>
            <NavLink to="/category/Cartas" className={({ isActive }) => isActive ? styles.activeLink : ""} onClick={() => setMenuOpen(false)}>
            Cartas
            </NavLink>
        </li>
        <li>
            <NavLink to="/category/Puzzles" className={({ isActive }) => isActive ? styles.activeLink : ""} onClick={() => setMenuOpen(false)}>
            Puzzles
            </NavLink>
        </li>
        </ul>

        {/* Sección de usuario móvil (se renderiza dentro del menú desplegable) */}
        <div className={styles.authMobileOnly}>
        {user && user.email ? (
            <div className={styles.userInfoMobile}>
            <span>👤 {user.email}</span>
            <button onClick={() => { logoutUser(); setMenuOpen(false); }} className={styles.logoutBtn}>Salir</button>
            </div>
        ) : (
            <Link to="/login" className={styles.loginBtn} onClick={() => setMenuOpen(false)}>
            Ingresar
            </Link>
        )}
        </div>
    </div>

      {/* LADO DERECHO FIJO: Autenticación Computadora + Carrito + Hamburguesa */}
    <div className={styles.rightSection}>
        <div className={styles.authDesktopOnly}>
        {user && user.email ? (
            <div className={styles.userInfo}>
            <span>👤 {user.email}</span>
            <button onClick={logoutUser} className={styles.logoutBtn}>Salir</button>
            </div>
        ) : (
            <Link to="/login" className={styles.loginBtn}>
            Ingresar
            </Link>
        )}
        </div>
        
        {/* Carrito siempre visible a la derecha de forma prolija */}
        <CartWidget />

        {/* Botón Hamburguesa a la par del carrito */}
        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Menú">
        <span className={`${styles.bar} ${menuOpen ? styles.open1 : ""}`}></span>
        <span className={`${styles.bar} ${menuOpen ? styles.open2 : ""}`}></span>
        <span className={`${styles.bar} ${menuOpen ? styles.open3 : ""}`}></span>
        </button>
    </div>
    </nav>
);
}

export default Navbar;
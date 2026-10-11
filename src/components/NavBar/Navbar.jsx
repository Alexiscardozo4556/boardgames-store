import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; 
import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";

function Navbar() {
  // Consumimos el contexto de forma segura
const authContext = useAuth();

  // Control de seguridad: Si por alguna razón el contexto viene vacío, creamos un salvavidas
const user = authContext ? authContext.user : null;
const logoutUser = authContext ? authContext.logoutUser : () => {};

return (
    <nav className={styles.navbar}>
      {/* El logo redirige siempre al inicio */}
    <Link to="/" className={styles.logoLink} style={{ textDecoration: "none" }}>
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

      {/* SECCIÓN DE AUTENTICACIÓN BLINDADA */}
    <div className={styles.authSection} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {user && user.email ? (
        <div style={{ color: "white", fontSize: "0.9rem", display: "flex", gap: "1rem", alignItems: "center" }}>
            <span>👤 {user.email}</span>
            <button 
            onClick={logoutUser} 
            style={{ 
                background: "white", 
                color: "orange", 
                border: "none", 
                padding: "0.3rem 0.6rem", 
                borderRadius: "4px", 
                fontWeight: "bold", 
                cursor: "pointer" 
            }}
            >
            Salir
            </button>
        </div>
        ) : (
        <Link 
            to="/login" 
            style={{ 
            color: "white", 
            textDecoration: "none", 
            fontWeight: "bold",
            border: "1px solid white",
            padding: "0.3rem 0.6rem",
            borderRadius: "4px"
            }}
        >
            Ingresar
        </Link>
        )}
    </div>

    <CartWidget />
    </nav>
);
}

export default Navbar;
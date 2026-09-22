import React from "react";
import styles from "./Footer.module.css";

function Footer() {
const currentYear = new Date().getFullYear();

return (
    <footer className={styles.footer}>
    <div className={styles.content}>
        <div className={styles.brandSection}>
        <h2 className={styles.logo}>Boardgames</h2>
        <p>Tu tienda amiga de juegos de mesa, cartas y puzzles.</p>
        </div>
        
        <div className={styles.infoSection}>
        <h4>Contacto & Horarios</h4>
        <p>📍 Av. de los Juegos 1234, CABA</p>
        <p>📧 soporte@boardgames.com</p>
        <p>🕒 Lun a Vie: 10:00 a 20:00 hs</p>
        </div>
    </div>
    
    <div className={styles.copyright}>
        <p>&copy; {currentYear} Boardgames Store. Todos los derechos reservados.</p>
    </div>
    </footer>
);
}

export default Footer;
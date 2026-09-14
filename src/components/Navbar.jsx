import "./Navbar.css";
import CartWidget from "./CartWidget";

function Navbar() {
return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "1rem", backgroundColor: "#f4f4f4" }}>
    <h2>Boardgames Store</h2>
    <ul style={{ display: "flex", listStyle: "none", gap: "1rem" }}>
        <li>Juegos de mesas</li>
        <li>Cartas</li>
        <li>Puzles</li>
    </ul>
    <CartWidget />
    </nav>
);
}

export default Navbar;

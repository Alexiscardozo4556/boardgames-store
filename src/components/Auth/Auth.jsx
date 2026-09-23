import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import styles from "./Auth.module.css"; 
function Auth() {
const [isRegister, setIsRegister] = useState(false);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");

const { registerUser, loginUser } = useAuth();
const navigate = useNavigate();

const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
    if (isRegister) {
        await registerUser(email, password);
    } else {
        await loginUser(email, password);
    }
    navigate("/checkout");
    } catch (err) {
    setError("Credenciales inválidas o error de registro. Intente nuevamente.");
    }
};

return (
    <div style={{ textAlign: "center", padding: "3rem" }}>
    <h2>{isRegister ? "Registrarse en Boardgames" : "Iniciar Sesión"}</h2>
    {error && <p style={{ color: "red" }}>{error}</p>}
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "300px", margin: "0 auto", gap: "1rem" }}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" style={{ backgroundColor: "orange", color: "white", border: "none", padding: "0.5rem" }}>
        {isRegister ? "Crear Cuenta" : "Ingresar"}
        </button>
    </form>
    <button onClick={() => setIsRegister(!isRegister)} style={{ background: "none", border: "none", color: "blue", marginTop: "1rem", cursor: "pointer" }}>
        {isRegister ? "¿Ya tenés cuenta? Iniciá sesión" : "¿No tenés cuenta? Registrate acá"}
    </button>
    </div>
);
}

export default Auth;
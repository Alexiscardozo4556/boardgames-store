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
    
    // 1. Limpiamos espacios fantasmas que suelen colarse al escribir o pegar
    const cleanEmail = email.trim();
    const cleanPassword = password.trim();

    // 2. Controlamos de antemano el límite de caracteres de Firebase
    if (cleanPassword.length < 6) {
    setError("La contraseña debe tener al menos 6 caracteres.");
    return;
    }

    try {
    if (isRegister) {
        await registerUser(cleanEmail, cleanPassword);
    } else {
        await loginUser(cleanEmail, cleanPassword);
    }
    navigate("/checkout");
    } catch (err) {
      // 3. LOG DE DIAGNÓSTICO: Esto te va a decir el código de error real en la consola
    console.error("Código de error exacto de Firebase:", err.code);
    console.error("Mensaje completo:", err.message);

    if (err.code === "auth/email-already-in-use") {
        setError("Este correo ya está registrado. Intentá iniciar sesión.");
    } else if (err.code === "auth/invalid-credential" || err.code === "auth/wrong-password") {
        setError("Contraseña incorrecta o usuario no encontrado.");
    } else {
        setError("Ocurrió un error. Por favor, intente nuevamente.");
    }
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

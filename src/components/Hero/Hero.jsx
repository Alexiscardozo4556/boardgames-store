import React, { useState, useEffect } from "react";

export default function Hero() {
    // Array ultra estable con colores planos premium (Estilo Nike/Adidas)
    const slides = [
        {
            title: "Domina la Mesa de Juego 🎲",
            description: "Descubrí los mejores juegos de estrategia con envíos rápidos a todo el país.",
            color: "#2c3e50"
        },
        {
            title: "Noche de Cartas Intensa 🃏",
            description: "Llevate los mejores mazos de cartas con hasta 3 cuotas sin interés.",
            color: "#16a085"
        },
        {
            title: "Desafía tu Mente con Puzzles 🧩",
            description: "Rompecabezas de colección de 500, 1000 y hasta 2000 piezas.",
            color: "#2980b9"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    // 🚀 MOTOR AUTOMÁTICO: Cambia de diapositiva cada 4 segundos solo
    useEffect(() => {
        const autoPlay = setInterval(() => {
            nextSlide();
        }, 4000); // 4000 milisegundos = 4 segundos

        // Limpieza obligatoria del temporizador al desmontar el componente
        return () => clearInterval(autoPlay);
    }, [currentIndex]); // Se reactiva el reloj cada vez que cambia el índice para reiniciar la cuenta

    return (
        <div style={{
            backgroundColor: slides[currentIndex].color,
            height: "350px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            textAlign: "center",
            padding: "0 1.5rem",
            fontFamily: "'Segoe UI', Roboto, sans-serif",
            boxSizing: "border-box",
            position: "relative",
            transition: "background-color 0.5s ease-in-out", // Animación suave entre colores
            width: "100%"
        }}>
            {/* Flecha Izquierda (Manual) */}
            <button
                onClick={prevSlide}
                style={{
                    position: "absolute", left: "1.5rem", background: "rgba(255,255,255,0.2)", color: "white",
                    border: "none", width: "40px", height: "40px", borderRadius: "50%", cursor: "pointer",
                    fontSize: "1.2rem", fontWeight: "bold", zIndex: 10
                }}
            >
                ❮
            </button>

            {/* Contenido Dinámico */}
            <h2 style={{ fontSize: "2.5rem", fontWeight: "800", margin: "0 0 1rem 0", textTransform: "uppercase", letterSpacing: "1px" }}>
                {slides[currentIndex].title}
            </h2>
            <p style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 0 2rem 0", color: "#f1f1f1" }}>
                {slides[currentIndex].description}
            </p>

            <button
                onClick={() => window.scrollTo({ top: 430, behavior: "smooth" })}
                style={{
                    backgroundColor: "orange", color: "white", border: "none",
                    padding: "0.8rem 2rem", fontSize: "1rem", fontWeight: "bold",
                    borderRadius: "30px", cursor: "pointer", boxShadow: "0 4px 15px rgba(255,165,0,0.3)",
                    transition: "transform 0.1s ease"
                }}
                onMouseDown={(e) => e.currentTarget.style.transform = "scale(0.95)"}
                onMouseUp={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
                Explorar Catálogo 👇
            </button>

            {/* Flecha Derecha (Manual) */}
            <button
                onClick={nextSlide}
                style={{
                    position: "absolute", right: "1.5rem", background: "rgba(255,255,255,0.2)", color: "white",
                    border: "none", width: "40px", height: "40px", borderRadius: "50%", cursor: "pointer",
                    fontSize: "1.2rem", fontWeight: "bold", zIndex: 10
                }}
            >
                ❯
            </button>

            {/* Puntitos Indicadores */}
            <div style={{ position: "absolute", bottom: "1.5rem", display: "flex", gap: "0.5rem", zIndex: 10 }}>
                {slides.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        style={{
                            width: "10px", height: "10px", borderRadius: "50%",
                            backgroundColor: currentIndex === index ? "orange" : "rgba(255,255,255,0.4)",
                            cursor: "pointer", transition: "background-color 0.3s"
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

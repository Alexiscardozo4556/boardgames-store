# 🎲 BoardGames Store

Tienda online de **juegos de mesa, cartas y puzles**, desarrollada con **React 19** y **Vite**.  
Este proyecto forma parte del módulo de React del curso, y representa la base técnica del e‑commerce que se irá ampliando en futuras entregas.

---

## 🚀 Tecnologías utilizadas
- React 19
- Vite
- Node.js
- JavaScript
- CSS Modules

---

## 🛒 Nuevas implementaciones (Checkpoint Carrito Funcional)
* **CartContext global:** Creación de un estado centralizado mediante Context API para evitar el prop drilling en la aplicación.
* **Actualizaciones inmutables:** Gestión inmutable del array del carrito a través de funciones lógicas de mapeo (`.map`) y filtrado (`.filter`) de React.
* **Control de duplicados:** Inteligencia para detectar IDs preexistentes incrementando su volumen por separado sin sobreescribir slots del catálogo.
* **Widget dinámico de Navbar:** CartWidget sincronizado globalmente que muta su insignia circular según cantidades de items agregados y se autohabilita selectivamente.
* **Vista detallada de órdenes:** Nueva ruta `/cart` con renderización condicional para listas vacías o reportes completos de subtotales y cierres de compra.

## 📦 Instalación y ejecución

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Alexiscardozo4556/boardgames-store
   ```
   
2. Instalar las dependencias en la carpeta raíz:
   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

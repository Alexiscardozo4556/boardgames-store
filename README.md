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

## 🛠️ Nuevas implementaciones (Checkpoint Listado Dinámico)

En esta entrega se transformó el catálogo estático en un **modelo de datos dinámico y asíncrono** mediante la separación de responsabilidades:

- **asyncMock.js:** Simulación de una base de datos local que expone una función `getProducts()`. Retorna una promesa (`Promise`) con un retardo de 2 segundos mediante `setTimeout`.
- **ItemListContainer:** Componente contenedor que implementa los hooks `useState` y `useEffect` para controlar el montaje y el estado de los juegos de mesa de forma asíncrona.
- **ItemList:** Componente encargado del mapeo dinámico del array de productos, garantizando el uso correcto de la propiedad `key={product.id}`.
- **Item:** Componente de presentación para renderizar las tarjetas individuales con toda la información requerida (nombre, categoría, precio, stock, descripción e imagen local).

---

## 📦 Instalación y ejecución

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Alexiscardozo4556/boardgames-store/tree/feature/listado-dinamico
   ```
   
2. Instalar las dependencias en la carpeta raíz:
   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

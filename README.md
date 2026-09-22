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

## 🗺️ Nuevas implementaciones (Checkpoint Navegación Completa)
* **React Router DOM:** Configuración de un sistema de ruteo eficiente mediante `BrowserRouter`, `Routes` y `Route`.
* **Navegación sin recarga (SPA):** Reemplazo de enlaces tradicionales por componentes `<Link>` y `<NavLink>` para transiciones fluidas.
* **Rutas Dinámicas:** Implementación de parámetros de URL con `useParams` para renderizar de manera automatizada las categorías (`/category/:id`) y el detalle pormenorizado de cada producto (`/item/:id`).
* **Manejo de rutas inválidas:** Creación de una vista de error 404 (NotFound) para contener accesos a URLs inexistentes.


### 📂 Estructura del Proyecto:
```text
src/
├── components/
│   ├── CartWidget/
│   ├── Item/
│   ├── ItemCount/
│   ├── ItemDetail/
│   ├── ItemDetailContainer/
│   ├── ItemList/
│   ├── ItemListContainer/
│   └── Navbar/
├── mock/
│   └── asyncMock.js
├── App.jsx
└── main.jsx
```


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

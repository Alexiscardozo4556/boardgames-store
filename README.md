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

## 🛠️ Nuevas implementaciones 

En esta etapa se implementó la vista de detalle de un producto individual aplicando el patrón de diseño de **separación de responsabilidades** (Componentes Contenedores y de Presentación).

### 🛠️ Características implementadas:
* **Estructura Modular:** Organización de componentes en carpetas individuales con estilos encapsulados mediante **CSS Modules**.
* **Lógica Asincrónica Dinámica:** Función `getProductById` que busca productos mediante su propiedad `id` y retorna una `Promise` simulando el delay de una API (2 segundos).
* **ItemDetailContainer:** Componente encargado de concentrar la lógica, controlar los estados de carga (`loading`) y consumir la promesa.
* **ItemDetail:** Componente de presentación que renderiza la información detallada del producto (Imagen, Nombre, Categoría, Descripción, Precio y Stock).
* **Reutilización de ItemCount:** Integración del contador dinámico dentro del detalle respetando de forma estricta los límites del stock disponible (mínimo 1, máximo según stock del producto).

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

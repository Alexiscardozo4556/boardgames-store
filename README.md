# 🎲 BoardGames Store — React + Firebase 🚀

¡Buenas! Bienvenidos a **BoardGames Store**, una Single Page Application (SPA) interactiva y de nivel profesional para comprar juegos de mesa, cartas y puzzles. 

Este proyecto representa la consolidación final de la cursada de **React en Coderhouse**. Pasamos de maquetar componentes fijos a migrar el 100% de la lógica a la nube con **Google Firebase**, sumando persistencia de datos NoSQL, autenticación biométrica/segura de usuarios y un checkout blindado.

---

## 🛠️ Tecnologías que rompen el molde
* **Frontend:** React 19 + Vite (Rendimiento ultra veloz).
* **Navegación:** React Router DOM (Rutas dinámicas y limpias).
* **Estilos:** CSS Modules (Cero choques de clases, estilos encapsulados por componente).
* **Backend as a Service (BaaS):** Google Firebase (v11+).
  * **Cloud Firestore:** Base de datos NoSQL para catálogo y órdenes de compra.
  * **Firebase Authentication:** Registro y login seguro con persistencia de sesión.

---

## ⚡ Implementaciones Clave (Séptima Pre-Entrega)

### 🗄️ 1. Base de datos real en Cloud Firestore
* **Catálogo en la Nube:** Chau al archivo local `asyncMock.js`. Ahora los componentes `ItemListContainer` e `ItemDetailContainer` realizan consultas asíncronas directas a las colecciones de Firestore mediante `collection`, `doc`, `getDoc` y `getDocs`.
* **Filtros en Servidor:** Usamos `query` y `where` para traernos de forma eficiente solo los productos de la categoría elegida, optimizando el consumo de datos de la app.
* **Órdenes Persistentes:** Al comprar se inyecta un nuevo documento en la colección `orders` con los datos del comprador, su correo autenticado, items, cantidades, subtotales, fecha del servidor (`Timestamp`) y limpia el carrito tras el éxito de la transacción.

### 🔐 2. Autenticación Activa con AuthContext
* **Estado Global de Usuario:** Implementamos un proveedor de Auth para registrar (`createUserWithEmailAndPassword`), loguear (`signInWithEmailAndPassword`) y desloguear (`signOut`) usuarios sin hacer prop drilling.
* **Sesión Inmortal:** Mediante el observador nativo `onAuthStateChanged`, si el usuario refresca la página, la sesión no se pierde y los datos persisten en la interfaz.
* **Navbar Inteligente:** Renderizado condicional en tiempo real. Si estás logueado te muestra tu emoji de perfil 👤, tu mail y un botón de "Salir". Si no, te invita a ingresar.

### 🛡️ 3. Checkout Protegido y Seguridad Blindada
* **Barrera de Navegación:** Bloqueamos las rutas sensibles con `<Navigate />`. Si un usuario intenta ir a pagar sin haber iniciado sesión, la app lo rebota de inmediato al `/login`.
* **Reglas de Seguridad:** Configuración estricta en la consola web de Firebase. Cualquiera puede mirar la vidriera de productos, pero nadie puede escribir órdenes si no está autenticado (`request.auth != null`).
* **Variables de Entorno:** Todas las API Keys del SDK de Firebase están resguardadas en un archivo `.env` local, el cual está debidamente ignorado en el `.gitignore` para no regalar credenciales en el repositorio público de GitHub.

---

## 📂 Estructura del Proyecto (Clean Architecture)

El proyecto quedó estructurado bajo las mejores prácticas de modularización:

```text
src/
├── components/
│   ├── Auth/                  # Pantalla de Login y Registro
│   ├── Cart/                  # Detalle del carrito de compras
│   ├── CartWidget/            # Icono con contador dinámico
│   ├── Checkout/              # Formulario de pago protegido
│   ├── Footer/                # Pie de página institucional fijos
│   ├── Item/                  # Tarjeta resumida del catálogo
│   ├── ItemCount/             # Contador reutilizable con límite de stock
│   ├── ItemDetail/            # Vista de información expandida
│   ├── ItemDetailContainer/   # Lógica asíncrona de un producto individual
│   ├── ItemList/              # Grilla responsiva de mapeo
│   ├── ItemListContainer/     # Lógica y filtrado de catálogo desde Firestore
│   └── NavBar/                # Menú de navegación interactivo
├── context/
│   ├── CartContext.jsx        # Estado global inmutable del carrito
│   └── AuthContext.jsx        # Estado global de inicio de sesión
├── firebase/
│   └── config.js              # Inicialización de servicios del SDK
├── App.jsx                    # Orquestador del ruteador general
└── main.jsx                   # Punto de entrada y montaje con los Providers
```

---

## 🚀 ¿Cómo correrlo en tu máquina?

1. **Clonate el repositorio:**
   ```bash
   git clone https://github.com/Alexiscardozo4556/boardgames-store
   ```

2. **Instalá las dependencias de Node:**
   ```bash
   npm install
   ```

3. **Configurá tus llaves mágicas:**
   Creá un archivo `.env` en la raíz del proyecto y pegale tus credenciales de la consola de Firebase sin comillas:
   ```text
   VITE_FIREBASE_API_KEY=tu_api_key
   VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain
   VITE_FIREBASE_PROJECT_ID=tu_project_id
   VITE_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
   VITE_FIREBASE_APP_ID=tu_app_id
   ```

4. **Prendé los motores:**
   ```bash
   npm run dev
   ```
   Abrí `http://localhost:5173` en tu navegador


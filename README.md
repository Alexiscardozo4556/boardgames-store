# 🎲 BoardGames Store

Tienda online de **juegos de mesa, cartas y puzzles**, desarrollada con **React** y **Vite**.  
Este proyecto representa la consolidación final de la aplicación, migrando de un entorno de datos estático y local a una plataforma dinámica, persistente y segura en la nube utilizando **Google Firebase**.

---

## 🚀 Tecnologías utilizadas
- React (Hooks, Context API)
- React Router DOM
- Vite
- JavaScript (ES6+)
- CSS Modules
- **Google Firebase (v11+)**
  - Cloud Firestore (Base de datos NoSQL)
  - Firebase Authentication (Gestión de usuarios)

---

## 🛠️ Nuevas implementaciones (Checkpoint Integración con Firebase)

En esta séptima y última pre-entrega, se transformó la aplicación en una plataforma comercial e interactiva real mediante los siguientes pilares:

### 1. 🗄️ Persistencia de Datos con Cloud Firestore
* **Migración del Catálogo:** Reemplazo total del archivo local de simulación por una base de datos real en la nube. Los componentes `ItemListContainer` e `ItemDetailContainer` ahora realizan consultas asíncronas directas a Firestore mediante `collection`, `doc`, `getDoc` y `getDocs`.
* **Consultas Eficientes:** Implementación de las funciones `query` y `where` para filtrar los juegos por categoría desde el servidor, evitando descargas innecesarias de datos.
* **Persistencia de Órdenes:** Al confirmar la compra, se genera dinámicamente un documento dentro de la colección `orders` que detalla los datos del comprador, el email del usuario autenticado, los productos seleccionados, cantidades, precio total y fecha del servidor (`Timestamp`), mostrando el ID de la orden como confirmación.

### 2. 🔐 Autenticación de Usuarios (Firebase Auth)
* **AuthContext Global:** Creación de un proveedor centralizado para gestionar de forma inmutable el registro (`createUserWithEmailAndPassword`), inicio de sesión (`signInWithEmailAndPassword`) y cierre de sesión (`signOut`).
* **Sincronización del Estado:** Implementación del observador nativo `onAuthStateChanged` para garantizar que la sesión del usuario permanezca activa e inalterada al recargar el navegador.
* **Navbar Dinámico:** Renderizado condicional en el menú superior que muestra el email del usuario activo y un botón de deslogueo inmediato, o en su defecto, el acceso al formulario.

### 3. 🛡️ Checkout Protegido y Seguridad Básica
* **Acceso Restringido:** Implementación de barreras de navegación (`<Navigate />`). Si un usuario no autenticado intenta proceder al pago desde el carrito, la aplicación lo redirige de inmediato a la pantalla de `/login`.
* **Reglas de Seguridad Firestore:** Configuración de reglas en la consola web para permitir lectura pública de productos, pero restringiendo la escritura de órdenes exclusivamente a peticiones con un token de autenticación válido (`request.auth != null`).
* **Variables de Entorno:** Centralización de las credenciales sensibles del SDK en un archivo `.env` local, protegiendo las API Keys mediante su inclusión estratégica en el `.gitignore`.

---

## 📦 Instalación y ejecución local

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Alexiscardozo4556/boardgames-store
   ```
   
2. Instalar las dependencias en la carpeta raíz:
   ```bash
   npm install
   ```

3. Configurar las variables de entorno:
   Crear un archivo `.env` en la raíz del proyecto y rellenar con sus credenciales de Firebase:
   ```text
   VITE_FIREBASE_API_KEY=tu_api_key
   VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain
   VITE_FIREBASE_PROJECT_ID=tu_project_id
   VITE_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
   VITE_FIREBASE_APP_ID=tu_app_id
   ```

4. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```


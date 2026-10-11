import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Inyectamos tus credenciales reales directamente en el objeto de configuración
const firebaseConfig = {
apiKey: "AIzaSyDRZECOGJVOixfG8usnazaFgwPSKt03UgI",
authDomain: "://firebaseapp.com",
projectId: "boardgames-store",
storageBucket: "boardgames-store.firebasestorage.app",
messagingSenderId: "716422542247",
appId: "1:716422542247:web:0fb58cd241c77930197c82"
};

const app = initializeApp(firebaseConfig);

// Exportamos los servicios requeridos por la rúbrica
export const db = getFirestore(app);
export const auth = getAuth(app);
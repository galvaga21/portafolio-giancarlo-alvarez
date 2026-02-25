/**
 * Firebase Configuration & Initialization
 * ==========================================
 * Conecta esta app con el proyecto Firebase de Giancarlo Alvarez.
 *
 * ⚠️  IMPORTANTE: Reemplaza los valores de `firebaseConfig` con los de tu
 *    proyecto real en Firebase Console → Project Settings → Your apps.
 *    Nunca expongas las claves en un repositorio público sin usar variables
 *    de entorno (.env) apropiadas para producción.
 *
 * Variables de entorno sugeridas (.env.local):
 *   VITE_FIREBASE_API_KEY=...
 *   VITE_FIREBASE_AUTH_DOMAIN=...
 *   VITE_FIREBASE_PROJECT_ID=...
 *   VITE_FIREBASE_STORAGE_BUCKET=...
 *   VITE_FIREBASE_MESSAGING_SENDER_ID=...
 *   VITE_FIREBASE_APP_ID=...
 */

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAnalytics, isSupported } from 'firebase/analytics'

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
}

// Inicializar Firebase App
const app = initializeApp(firebaseConfig)

// Firestore — Base de datos principal de la landing
const db = getFirestore(app)

// Storage — Para assets y archivos
const storage = getStorage(app)

// Analytics — Solo se inicializa si el entorno lo soporta (no SSR)
const analytics = isSupported().then((supported) => {
    if (supported) return getAnalytics(app)
    return null
})

export { app, db, storage, analytics }

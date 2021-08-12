// ./initAuth.js
import { init } from 'next-firebase-auth'
const TWELVE_DAYS_IN_MS = 12 * 60 * 60 * 24 * 1000

const initAuth = () => {
  init({
    debug: false,
    authPageURL: '/',
    appPageURL: '/dashboard',
    loginAPIEndpoint: '/api/login', // required
    logoutAPIEndpoint: '/api/logout', // required
    // Required in most cases.
    firebaseAdminInitConfig: {
      credential: {
        projectId: process.env.NEXT_PUBLIC_firebase_projectId,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        // The private key must not be accesssible on the client side.
        privateKey: process.env.FIREBASE_PRIVATE_KEY
        ? JSON.parse(process.env.FIREBASE_PRIVATE_KEY)
        : undefined,
      },
      databaseURL: process.env.NEXT_PUBLIC_firebase_databaseURL,
    },
    firebaseClientInitConfig: {
      apiKey: process.env.NEXT_PUBLIC_firebase_apiKey, // required
      authDomain: process.env.NEXT_PUBLIC_firebase_authDomain,
      databaseURL: process.env.NEXT_PUBLIC_firebase_databaseURL,
      projectId: process.env.NEXT_PUBLIC_firebase_projectId,
    },
    cookies: {
      name: 'kookers',
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS,
      ],
      httpOnly: true,
      maxAge: TWELVE_DAYS_IN_MS,
      overwrite: true,
      path: '/',
      sameSite: 'strict',
      secure: process.env.NEXT_PUBLIC_COOKIE_SECURE === 'true',
      signed: true,
    },
  })
}

export default initAuth
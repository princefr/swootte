// ./initAuth.js
import { init } from 'next-firebase-auth'


// 0x269c5aB2E955d24f5A8F3dA9fD44696EbA15548A contrat

const initAuth = () => {
  init({
    debug: false,
    authPageURL: '/fr',
    appPageURL: '/home',
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
      name: 'swootte',
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS,
      ],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000,
      overwrite: true,
      path: '/',
      sameSite: 'strict',
      secure: false,
      signed: true,
    }
  })
}

export default initAuth
import 'tailwindcss/tailwind.css'
import { UserContext } from '../context/UserContext'
import { useState, useMemo, useEffect } from 'react';
import { SideBarMenuContext } from '../context/SideBarMenuContext';
import initAuth from '../utils/initAuth';
import firebase from 'firebase/app';
import 'firebase/auth'
import NProgress from 'nprogress'
import "nprogress/nprogress.css";
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic'
import NotificationProvider from '../notifications/NotificationContext';
import { ApolloProvider } from '@apollo/client';
import client from '../utils/graphql';
import { FirebaseUIDContext } from '../context/FirebaseUIDContext';
import FirebaseClient from '../utils/firebase';
import { DeviseContext } from '../context/DeviseContext';







const TopProgressBar = dynamic(
  () => {
    return import("../components/TopProgressBar");
  },
  { ssr: false },
);


initAuth()
function MyApp({ Component, pageProps }) {
  FirebaseClient()
  const router = useRouter()
  const [user, setUser] = useState(null);
  const [firebaseUID, setFirebaseUID] = useState(null)
  

  const [Devise, setDevice] = useState(null)
  const deviseValue = useMemo(() => ({Devise, setDevice}), [Devise, setDevice])
  // Set an initializing state whilst Firebase connects
  // const [initializing, setInitializing] = useState(true);

 

  const providerValue = useMemo(() => ({user, setUser}), [user, setUser])
  const firebaseUIDValue = useMemo(() => ({firebaseUID, setFirebaseUID}), [firebaseUID, setFirebaseUID])

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (_user) => {
      //if (initializing) setInitializing(false);
      if(_user){
        //setTokenId(_user.getIdToken())
        setFirebaseUID(_user.uid)
      }
    })
  }, [])


  useEffect(() => { 
    const handleRouteChange = (url) => {
      NProgress.done()
    }

    // https://stackoverflow.com/questions/55624695/loading-screen-on-next-js-page-transition

    router.events.on('routeChangeStart', (url) => {
      NProgress.start()
    })


    router.events.on('routeChangeComplete', handleRouteChange)
    
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])



  // pageName , isActive
  const [sidemenu, setActiveMenu] = useState([{pageName: "home", isActive: true}, {pageName: "balance", isActive: false}, {pageName: "transferts", isActive: false}, {pageName: "users", isActive: false}])
  const sideMenuValue = useMemo(() => ({sidemenu, setActiveMenu}), [sidemenu, setActiveMenu])




  
  return (
    <>
    <TopProgressBar/>
    <ApolloProvider client={client}>
      <FirebaseUIDContext.Provider value={firebaseUIDValue}>
        <UserContext.Provider value={providerValue}>
            <DeviseContext.Provider value={deviseValue}>
            <NotificationProvider>
              <SideBarMenuContext.Provider value={sideMenuValue}>
              <Component {...pageProps} />
            </SideBarMenuContext.Provider>
            </NotificationProvider>

            </DeviseContext.Provider>
      </UserContext.Provider>
      </FirebaseUIDContext.Provider>
    </ApolloProvider>
  </>
  )
  

}

export default MyApp

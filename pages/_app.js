import 'tailwindcss/tailwind.css'
import { UserContext } from '../context/UserContext'
import { useState, useMemo, useEffect } from 'react';
import initAuth from '../utils/initAuth';
import 'firebase/auth'
import NProgress from 'nprogress'
import "nprogress/nprogress.css";
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic'
import NotificationProvider from '../notifications/NotificationContext';
import { FirebaseUIDContext } from '../context/FirebaseUIDContext';
import { DeviseContext } from '../context/DeviseContext';
import { ModeContext } from '../context/ModeContext';
import { AuthProvider } from '../lib/Auth';
import firebase from 'firebase/app';
import { WalletContext } from '../context/WalletConntext';



const TopProgressBar = dynamic(
  () => {
    return import("../components/TopProgressBar");
  },
  { ssr: false },
);


initAuth()
const MyApp = ({ Component, pageProps }) => {
  const router = useRouter()
  const [user, setUser] = useState(null);
  const [firebaseUID, setFirebaseUID] = useState(null)
  const [LiveMode, setLiveMode] = useState(false)
  const modeValue = useMemo(() => ({ LiveMode, setLiveMode }), [LiveMode, setLiveMode])
  const [Devise, setDevice] = useState(null)
  

  const deviseValue = useMemo(() => ({ Devise, setDevice }), [Devise, setDevice])

  const [Wallet, setWallet] = useState(null)
  const walletProviderValue = useMemo(() => ({ Wallet, setWallet }), [Wallet, setWallet])

  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser])
  const firebaseUIDValue = useMemo(() => ({ firebaseUID, setFirebaseUID }), [firebaseUID, setFirebaseUID])
  const [init, setInit] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((_user) => {
      setInit(true)
      if(_user){
        setFirebaseUID(_user.uid)
      }
    })
  });

  useEffect(() => {
    const handleRouteChange = (url) => {
      NProgress.done()
    }

  
    router.events.on('routeChangeStart', (url) => {
      // https://stackoverflow.com/questions/55624695/loading-screen-on-next-js-page-transition
      NProgress.start()
    })


    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])



  if(init == false || init == null) return <div></div>;

  return (
    <>
      <TopProgressBar />
      <AuthProvider>
        <FirebaseUIDContext.Provider value={firebaseUIDValue}>
          <UserContext.Provider value={providerValue}>
            <ModeContext.Provider value={modeValue}>
              <DeviseContext.Provider value={deviseValue}>
                <WalletContext.Provider value={walletProviderValue}>
                  <NotificationProvider>
                    <Component {...pageProps} />
                  </NotificationProvider>
                </WalletContext.Provider>
              </DeviseContext.Provider>
            </ModeContext.Provider>
          </UserContext.Provider>
        </FirebaseUIDContext.Provider>
      </AuthProvider>
    </>
  )
}

export default MyApp
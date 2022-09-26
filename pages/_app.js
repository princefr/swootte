import 'tailwindcss/tailwind.css'
import { UserContext } from '../context/UserContext'
import { useState, useMemo, useEffect } from 'react';
import initAuth from '../utils/initAuth';
import NProgress from 'nprogress'
import "nprogress/nprogress.css";
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic'
import NotificationProvider from '../notifications/NotificationContext';
import { ModeContext } from '../context/ModeContext';
import { AuthProvider } from '../lib/Auth';
import { WalletContext } from '../context/WalletConntext';

import { EnterpriseContext } from '../context/EnterpriseContext';
import { QrCodeContext } from '../context/QrCodeContext';
import PinCodeProvider from '../passcode/passCodeContext';
import { LocaleContext } from '../context/LocaleContext';
import { LocalizationContext } from '../context/LocalizationContext';
import fr from '../localization/fr';



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


  const [LiveMode, setLiveMode] = useState(false)
  const modeValue = useMemo(() => ({ LiveMode, setLiveMode }), [LiveMode, setLiveMode])

  const [Wallet, setWallet] = useState(null)
  const walletProviderValue = useMemo(() => ({ Wallet, setWallet }), [Wallet, setWallet])

  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser])
 


  const [enterpriseId, setEnterpriseId] = useState([])
  const enterpriseValue = useMemo(() => ({ enterpriseId, setEnterpriseId }), [enterpriseId, setEnterpriseId])

  const [qrCode, setQrCode] = useState(null)
  const qrValue = useMemo(() => ({ qrCode, setQrCode }), [qrCode, setQrCode])


  const [locale, setLocale] = useState('fr')

  const LocaleValue = useMemo(() => ({locale, setLocale}), [locale, setLocale])

  const [localization, setLocalization] = useState(fr)
  const LocalizationValue = useMemo(() => ({localization, setLocalization}), [localization, setLocalization])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("mode"))
    if (data) return setLiveMode(data)
  }, [])


  useEffect(() => {
    setLocale(router.locale)
  }, [])






  useEffect(() => {
    const handleRouteChange = (_url) => {
      NProgress.done()
    }


    router.events.on('routeChangeStart', (_url) => {
      // https://stackoverflow.com/questions/55624695/loading-screen-on-next-js-page-transition
      NProgress.start()
    })


    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])


  return (
    <>
      <TopProgressBar />
      <AuthProvider>
        <LocaleContext.Provider value={LocaleValue}>
          <LocalizationContext.Provider value={LocalizationValue}>
          <UserContext.Provider value={providerValue}>
            <ModeContext.Provider value={modeValue}>
              <EnterpriseContext.Provider value={enterpriseValue}>
                <QrCodeContext.Provider value={qrValue}>
                  <WalletContext.Provider value={walletProviderValue}>
                    <PinCodeProvider>
                      <NotificationProvider>
                        <Component {...pageProps} />
                      </NotificationProvider>
                    </PinCodeProvider>
                  </WalletContext.Provider>
                </QrCodeContext.Provider>
              </EnterpriseContext.Provider>
            </ModeContext.Provider>
          </UserContext.Provider>
          </LocalizationContext.Provider>
        </LocaleContext.Provider>
      </AuthProvider>
    </>
  )
}

export default MyApp
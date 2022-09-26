import Head from 'next/head'
import { Nav } from '../components/nav/navbar'
import { Header } from '../components/content/hero'
import { Feature } from '../components/content/features'
import { Footer } from '../components/footer/footer'
import { Content } from '../components/content/subcontent'
import CookieBanner from '../components/banner/cookieBanner'
import EmailView from '../components/dashboard/landing/email'
import MobileAppPart from '../components/content/mobileAppPart'
import useLocalization from '../hooks/useLocalization'
import LandingNav from '../comp/landing/LandingNav'
import { withAuthUser} from 'next-firebase-auth'


const Index = () => {
  const localization = useLocalization()
  return (
    <div>
      <Head>
        <title>Swootte - Envoyez, Recevez, Payez avec des CFA en ligne</title>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="Swootte - Envoyez, Recevez, Payez avec des CFA en ligne" />
        <meta property="og:url" content="https://www.swootte.com/" />
        <meta property="og:site_name" content="Swootte" />
        <meta property="og:description" content="Swootte vous permet de créer votre solution de point de vente pour accepter les paiements en Franc CFA sur place ou sur le web. Commercer sans frontière meme à l'internationale." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1508938255445-041651dfe0c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" />

        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:site" content="@swootte" />
        <meta name="twitter:creator" content="@ondpr" />
      </Head>

      <LandingNav />
      <main>


        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32'>
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">{localization.landingPageTitle}    <span className="relative whitespace-nowrap text-blue-600">
            <span className="relative">{localization.landingPageTitle_2}</span></span></h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">{localization.HeroDescriptionText}</p>
          {/* <div className="mt-10 flex justify-center gap-x-6">
            <a className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-900 text-white hover:bg-blue-700 hover:text-blue-100 active:bg-blue-800 active:text-blue-300 focus-visible:outline-blue-900" href="/register">Get 6 months free</a><a className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-blue-200 text-blue-700 hover:text-blue-900 hover:ring-blue-300 active:bg-blue-100 active:text-blue-600 focus-visible:outline-blue-600 focus-visible:ring-blue-300" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><svg aria-hidden="true" className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"><path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z"></path></svg><span className="ml-3">Watch video</span></a>
          </div> */}
          <div className="mt-36 lg:mt-44">
            <p className="font-display text-base text-blue-900">Nos partenaires</p>
            <ul role="list" className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0">
              <li>
                <ul role="list" className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0">
                  <li className="flex">
                    <img alt="Transistor" src="/images/155971.svg" width="158" height="48" decoding="async" data-nimg="future" loading="lazy" />
                  </li>
                  <li className="flex">
                    <img alt="Tuple" src="/images/google-cloud-logo.svg" width="105" height="48" decoding="async" data-nimg="future" loading="lazy" />
                  </li>
                  <li className="flex">
                    <img alt="StaticKit" src="/images/ethereum-logo.png" width="127" height="48" decoding="async" data-nimg="future" loading="lazy" />
                  </li>
                </ul>
              </li>
              <li>
                <ul role="list" className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0">
                  <li className="flex">
                    <img alt="Mirage" src="/images/mtn-logo-40644FC8B0-seeklogo.com.png" className='block object-contain h-10 greyC' decoding="async" data-nimg="future" loading="lazy" />
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <Feature></Feature>
        <Content></Content>


        <section id="get-started-today" className="relative overflow-hidden bg-blue-600 py-32">
          <img alt="" src="/images/background-call-to-action.6a5a5672.jpg" width="2347" height="1244" decoding="async" data-nimg="future" className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" loading="lazy" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="mx-auto max-w-lg text-center">
              <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">{localization.FeeLandingTitle}</h2>
              <p className="mt-4 text-lg tracking-tight text-white">{localization.FeeLandingDescription}</p>
              <a className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10" href="/register">{localization.FeeLanndingButtonText}</a>
            </div>
          </div>
        </section>

        <MobileAppPart></MobileAppPart>


        <EmailView></EmailView>
        <CookieBanner showCookieBanner={false}></CookieBanner>
      </main>

      <Footer></Footer>
    </div>
  )
}



export default withAuthUser()(Index)



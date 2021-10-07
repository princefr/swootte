import Head from 'next/head'
import { Nav } from '../components/nav/navbar'
import { Header } from '../components/content/hero'
import { Feature } from '../components/content/features'
import { Footer } from '../components/footer/footer'
import { Content } from '../components/content/subcontent'
import CookieBanner from '../components/banner/cookieBanner'
import EmailView from '../components/dashboard/landing/email'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Swootte - Envoyez, Recevez, Payez avec des CFA numérique.</title>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="Swootte - Envoyez, Recevez, Payez avec des CFA numérique." />
        <meta property="og:url" content="https://www.swootte.com/" />
        <meta property="og:site_name" content="Swootte" />
        <meta property="og:description" content="Swootte vous permet de créer votre solution de point de vente pour accepter les paiements en Franc CFA numérique sur place ou sur le web. Commercer sans frontière meme à l'internationale." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1508938255445-041651dfe0c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" />

        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:site" content="@swootte" />
        <meta name="twitter:creator" content="@ondpr" />
      </Head>

      <Nav></Nav>
      <main>

        <Header></Header>
        <section className="mx-auto">
          <div className="container px-5 mx-auto lg:px-24 ">
            <div className="flex flex-col w-full mb-4 text-left lg:text-center">
            </div>
            <div className="grid grid-cols-2 gap-16 mb-16 text-center justify-center items-center lg:grid-cols-6">
              <div className="flex items-center justify-center">
                <img
                  src="/images/ethereum-logo.png"
                  alt="Ethereum logo"
                  className="block object-contain h-16 greyC"
                ></img>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/images/usdc_logo.png"
                  alt="USDC logo"
                  className="block object-contain h-16 greyC"
                ></img>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/images/tron-logo.png"
                  alt="Tron logo"
                  className="block object-contain h-16 greyC"
                ></img>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/images/Binance.png"
                  alt="Binance logo"
                  className="block object-contain h-16 greyC"
                ></img>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/images/Solana_Logo_2021_Color.png"
                  alt="Solana logo"
                  className="block object-contain h-16 greyC"
                ></img>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/images/cfa_numerique.svg"
                  alt="Solana logo"
                  className="block object-contain h-16 greyC"
                ></img>
              </div>
            </div>
          </div>
        </section>
        <Feature></Feature>
        <Content></Content>



        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Frais ridicules de 0,5 %.</span>
              <span className="block text-red-800">75% moins cher que la plupart des concurrents.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a href="#" className="inline-flex items-center justify-center px-3 py-2 border border-transparent text-base font-medium  text-white bg-black hover:bg-gray-700">
                  Commencez
                </a>
              </div>
            </div>
          </div>
        </div>

        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img className="object-cover object-center rounded" alt="hero" src="images/cfa_numerique.svg" />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Le franc CFA nnumérique</h1>
              <p className="mb-4 leading-relaxed">Le franc CFA numérique (FCFA) est une crypto-monnaie de type monnaie numérique stable émise par la société Swootte LTD. </p>
              <p>Le Franc CFA numérique est garantie à 100%, est transparent et repose essentiellement sur les technologies Bloackchains.
                 À l'aide du Franc CFA numérique, Swotte convertit l'argent liquide en monnaie numérique, et permet donc à cette dernière de voyager au dela des frontières du Congo à moindre coût.</p>
            </div>
          </div>
        </section>


        <EmailView></EmailView>
        <CookieBanner showCookieBanner={false}></CookieBanner>
      </main>

      <Footer></Footer>
    </div>
  )
}


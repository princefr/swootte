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
        <title>Swootte - Accept digital dollar for your physical commerce</title>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="Swootte - Accept digital dollar for your physical commerce" />
        <meta property="og:url" content="https://www.swootte.com/" />
        <meta property="og:description" content="Swootte Terminal allows you to create your point of sales solution to accept digital dollar payments on the spot. Designed for modern merchants and platforms, our terminals helps you enter the new internet financial world." />
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
            <div className="grid grid-cols-2 gap-16 mb-16 text-center justify-center items-center lg:grid-cols-5">
              <div className="flex items-center justify-center">
                <img
                  src="/images/ethereum-logo.png"
                  alt="Google Logo"
                  className="block object-contain h-16 greyC"
                ></img>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/images/usdc_logo.png"
                  alt="Shopify Logo"
                  className="block object-contain h-16 greyC"
                ></img>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/images/tron-logo.png"
                  alt="Shopify Logo"
                  className="block object-contain h-16 greyC"
                ></img>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/images/Binance.png"
                  alt="Cloudflare Logo"
                  className="block object-contain h-16 greyC"
                ></img>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/images/Solana_Logo_2021_Color.png"
                  alt="Cloudflare Logo"
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
              <span className="block">Ridiculous 0.5% fees</span>
              <span className="block text-red-800">75% cheaper than most traditional companies.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a href="#" className="inline-flex items-center justify-center px-3 py-2 border border-transparent text-base font-medium  text-white bg-black hover:bg-gray-700">
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>


        <EmailView></EmailView>
        <CookieBanner showCookieBanner={false}></CookieBanner>
      </main>

      <Footer></Footer>
    </div>
  )
}

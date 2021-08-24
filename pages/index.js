import Head from 'next/head'
import { Nav } from '../components/nav/navbar'
import { Header } from '../components/content/hero'
import { Feature } from '../components/content/features'
import { Footer } from '../components/footer/footer'
import { Content } from '../components/content/subcontent'

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
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                <div className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
                  <h1 className="text-green-600 font-bold text-3xl">Ridiculous 0.5% fees.</h1>
                  <h1>75% cheaper than most traditional companies.</h1>
                </div>
                <button className="flex-shrink-0 text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-900 text-lg mt-10 sm:mt-0">Start today</button>
              </div>
            </div>
          </section>
          <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
              <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
                <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                  <div className="lg:w-1/2 px-6">
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                    <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                  </div>
                  <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                    <a className="text-indigo-500 leading-relaxed">example@email.com</a>
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                    <p className="leading-relaxed">123-456-7890</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact us</h2>
                <p className="leading-relaxed mb-5 text-gray-600">Get easier access to answers to your questions, right in your inbox.
Fill out the form below and we'll send you all the information you need. We promise you won't receive hundreds of emails from us. We're here to make your job easier.</p>
                <div className="relative mb-4">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                  <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                  <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                  <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
                <button className="flex-shrink-0 text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-900 text-lg mt-10 sm:mt-0">Send</button>
                <p className="text-xs text-gray-500 mt-3">By submitting this form, you give us permission to contact you by phone and email, and to send you promotional information. You may cancel at any time.</p>
              </div>
            </div>
          </section>
      </main>

          <Footer></Footer>
        </div>
          )
}

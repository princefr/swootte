import NavAlone from "../components/nav/nav_alone"
import Head from 'next/head'
import { Footer } from "../components/footer/footer"



const Blog = () => {
    return (
        <div>
            <Head>
            <title>Swootte - Blog</title>
            <link rel="icon" href="/favicon.ico" />

            <meta property="og:title" content="Swootte - Blog" />
            <meta property="og:url" content="https://www.swootte.com/" />
            <meta property="og:description" content="Swootte Terminal allows you to create your point of sales solution to accept digital dollar payments on the spot. Designed for modern merchants and platforms, our terminals helps you enter the new internet financial world." />
            <meta property="og:image" content="https://images.unsplash.com/photo-1508938255445-041651dfe0c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" />
            <meta name="twitter:card" content="summary"></meta>

            <meta name="twitter:site" content="@swootte" />
            <meta name="twitter:creator" content="@ondpr" />
            </Head>
            <nav>
            <NavAlone></NavAlone>
            <header className="bg-white shadow-b flex flex-row justify-between items-start p-4">
                        <div className="px-12 py-2 flex flex-col space-y-2">
                            <h1 className="text-3xl  text-gray-900 font-bold font-montserrat">Press</h1>
                            <div>Get weekly articles in your inbox from our team about crypto currencies and new features.</div>
                        </div>
                        <div className="flex flex-row space-x-3">

                        </div>
            </header>



            
            </nav>

            <Footer></Footer>
        </div>
    )
}



export default Blog
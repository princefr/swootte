import NavAlone from "../components/nav/nav_alone"
import Head from 'next/head'
import { Footer } from "../components/footer/footer"



const About = () => {
    return (
        <div>

            <Head>
                <title>Swootte - À propos</title>
                <link rel="icon" href="/favicon.ico" />

                <meta property="og:title" content="Swootte - À propos" />
                <meta property="og:type" content="Website" />
                <meta property="og:site_name" content="Swootte" />
                <meta property="og:url" content="https://www.swootte.com/responsible-disclosure" />
                <meta property="description" content="Decouvrez les informations sur Swootte et son équipe" />
                <meta property="og:description" content="Decouvrez les informations sur Swootte et son équipe" />
                <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/swoosh-97759.appspot.com/o/Subtract.png?alt=media&token=e2e8129a-15c5-4df0-923e-9fabb7cd8e43" />
                <meta name="twitter:card" content="summary"></meta>

                <meta name="twitter:site" content="@swootteApp" />
                <meta name="twitter:title" content="Swootte - À propos" />
                <meta name="twitter:description" content="Decouvrez les informations sur Swootte et son équipe" />
                <meta name="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/swoosh-97759.appspot.com/o/Subtract.png?alt=media&token=e2e8129a-15c5-4df0-923e-9fabb7cd8e43" />
                <meta name="twitter:creator" content="@ondpr" />
            </Head>

            <NavAlone></NavAlone>

            <main>
                <div className="flex flew-row items-center justify-center p-5 text-4xl font-bold font-montserrat">À propos de Swootte</div>

            </main>

            <Footer></Footer>
        </div>
    )
}



export default About
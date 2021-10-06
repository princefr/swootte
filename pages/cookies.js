import NavAlone from "../components/nav/nav_alone"
import Head from 'next/head'
import { Footer } from "../components/footer/footer"





const Cookies = () => {
    return (
        <div>
            <Head>
                <title>Swootte - Gestion des cookies</title>
                <link rel="icon" href="/favicon.ico" />

                <meta property="og:title" content="Swootte - Gestion des cookies" />
                <meta property="og:type" content="Website" />
                <meta property="og:site_name" content="Swootte" />
                <meta property="og:url" content="https://www.swootte.com/responsible-disclosure" />
                <meta property="description" content="Nous prenons la confidentialité et la sécurité très au sérieux. Renseignez-vous sur les mesures de sécurité que nous prenons pour protéger les renseignements personnels et délicats." />
                <meta property="og:description" content="Nous prenons la confidentialité et la sécurité très au sérieux. Renseignez-vous sur les mesures de sécurité que nous prenons pour protéger les renseignements personnels et délicats." />
                <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/swoosh-97759.appspot.com/o/Subtract.png?alt=media&token=e2e8129a-15c5-4df0-923e-9fabb7cd8e43" />
                <meta name="twitter:card" content="summary"></meta>

                <meta name="twitter:site" content="@swootteApp" />
                <meta name="twitter:title" content="Swootte - Gestion des cookies" />
                <meta name="twitter:description" content="Nous prenons la confidentialité et la sécurité très au sérieux. Renseignez-vous sur les mesures de sécurité que nous prenons pour protéger les renseignements personnels et délicats." />
                <meta name="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/swoosh-97759.appspot.com/o/Subtract.png?alt=media&token=e2e8129a-15c5-4df0-923e-9fabb7cd8e43" />
                <meta name="twitter:creator" content="@ondpr" />
            </Head>
            <NavAlone></NavAlone>

            <main>

            </main>

            <Footer></Footer>
        </div>
    )
}



export default Cookies
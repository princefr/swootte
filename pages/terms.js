import { Footer } from "../components/footer/footer"
import NavAlone from "../components/nav/nav_alone"
import Head from 'next/head'




const Terms = () => {
    return (
        <div>
            <Head>
                <title>Swootte – Accord d'utilisation</title>
                <link rel="icon" href="/favicon.ico" />

                <meta property="og:title" content="Swootte – Accord d'utilisation" />
                <meta property="og:type" content="Website" />
                <meta property="og:site_name" content="Swootte" />
                <meta property="og:url" content="https://www.swootte.com/responsible-disclosure" />
                <meta property="description" content="Ici vous trouverez l’Accord d'utilisation s’appliquant aux conditions d’utilisation de nos produits.  Des questions? N'hésitez pas à nous contactez. " />
                <meta property="og:description" content="Ici vous trouverez l’Accord d'utilisation s’appliquant aux conditions d’utilisation de nos produits.  Des questions? N'hésitez pas à nous contactez. " />
                <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/swoosh-97759.appspot.com/o/Subtract.png?alt=media&token=e2e8129a-15c5-4df0-923e-9fabb7cd8e43" />
                <meta name="twitter:card" content="summary"></meta>

                <meta name="twitter:site" content="@swootteApp" />
                <meta name="twitter:title" content="Swootte – Accord d'utilisation" />
                <meta name="twitter:description" content="Ici vous trouverez l’Accord d'utilisation s’appliquant aux conditions d’utilisation de nos produits.  Des questions? N'hésitez pas à nous contactez. " />
                <meta name="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/swoosh-97759.appspot.com/o/Subtract.png?alt=media&token=e2e8129a-15c5-4df0-923e-9fabb7cd8e43" />
                <meta name="twitter:creator" content="@ondpr" />
            </Head>
            <NavAlone></NavAlone>
            <main>
                <div className="flex flew-row items-center justify-center p-5 text-5xl font-bold font-montserrat">Swootte Terms of Use</div>
                <div className="flex flex-row justify-end px-10 font-light font-montserrat">Last revised: 9 September, 2021</div>

                <div className="flex flew-row px-16 justify-center mt-10 font-sm">These Swootte Terms of Use is entered into between you (hereinafter referred to as “you” or “your”) and Swootte operators (as defined below). By accessing, downloading, using or clicking on “I agree” to accept any Swootte Services (as defined below) provided by Swootte (as defined below), you agree that you have read, understood and accepted all of the terms and conditions stipulated in these Terms of Use (hereinafter referred to as “these Terms”) as well as our Privacy Policy at www Swootte.com/privacy. In addition, when using some features of the Services, you may be subject to specific additional terms and conditions applicable to those features.
                    Please read the terms carefully as they govern your use of Swootte Services.
                </div>

                <div className="px-16 mt-5 font-semibold">I. Definitions</div>
                <div className="px-16 mt-5">

                </div>


                

            </main>

            <Footer></Footer>
        </div>
    )
}



export default Terms
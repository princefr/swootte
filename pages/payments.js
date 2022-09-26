import NavAlone from "../components/nav/nav_alone"
import Head from 'next/head'
import {QRCodeSVG} from 'qrcode.react';
import Lottie from "lottie-react";
import loadingAnimation from "../lf30_editor_jsgxctvf.json"
import { useRouter } from "next/router";
import { useEffect } from "react/cjs/react.production.min";

const PaymentPageView = (query) => { 
    const router = useRouter()

    const click = (event) => {
        event.preventDefault()
        router.push({
            pathname: query.query.return_url,
            query: {id: query.query.reference, status: "success"}
        })
    }
    return(
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

            <nav>
                <NavAlone></NavAlone>
            </nav>

            <div className="flex flex-col p-24 h-full w-full items-center justify-center space-y-6">
                <div className="">Total: {query.query.amount} cfa </div>
                <QRCodeSVG value={"yes"} height="250" width="250" />
                <div className="flex flex-row space-x-4 items-center justify-center pt-10">
                    <div className="flex h-12 w-12">
                        <Lottie animationData={loadingAnimation} loop={true}/>
                    </div>
                    <div onClick={click}>En attente de paiement</div>
                </div>
            </div>
        </div>
    )
}


export default PaymentPageView



export async function getServerSideProps({params, req, res, query}){
    console.log(query)
    
    return {
        props: {
            query
        }
    }

}



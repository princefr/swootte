
import Head from 'next/head'
import {QRCodeSVG} from 'qrcode.react';
import Lottie from "lottie-react";
import loadingAnimation from "../../lf30_editor_jsgxctvf.json"
import { useRouter } from "next/router";
import { useSSrClientApollo } from "../../lib/Auth";
import { getPaymentById, GET_PAYMENTS_BY_ID } from "../../queries/getPaymentById";
import { useQuery, useSubscription } from '@apollo/client';
import { TRANSACTION_SUBSCRIPTION_BY_ID } from '../../subscription/subscribeToTransaction';


const TransactionChild = ({transaction, return_url, reference, _amount}) => { 
    const router = useRouter()

    const click = (event) => {
        event.preventDefault()
        router.push({
            pathname: return_url,
            query: {id: reference, status: "success"}
        })
    }

    const {data, loading} = useSubscription(TRANSACTION_SUBSCRIPTION_BY_ID, {
        variables: {
            id: transaction._id
        },
        onSubscriptionData: (options) => {
            console.log(options)
        }
    })

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

            {/* <nav>
                //<NavAlone></NavAlone>
            </nav> */}

            <div className="flex flex-col p-24 h-full w-full items-center justify-center space-y-6">
                <div className="">Total: {transaction.amount} cfa </div>
                <QRCodeSVG value={transaction._id} height="250" width="250" />
                <div className="flex flex-row space-x-4 items-center justify-center pt-10">
                    <div className="flex h-12 w-12">
                        <Lottie animationData={loadingAnimation} loop={true}/>
                    </div>
                    <div onClick={click}>En attente de paiement</div>
                </div>

                <h4>New comment: {
                    !loading && data.transactionPayed != null ? data.transactionPayed.status : null
                }</h4>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const {amount, reference,  return_url, id} = context.query
    const client = useSSrClientApollo("")
    const {data, error} = await getPaymentById(client, id)
    if(!error && data.userExist) {
     return {
         props: {},
         redirect: '/',
     }
    }else{
     return {
         props: {
             transaction: data.getTransactionByIdUnauthed,
             return_url: return_url,
             reference: reference,
             amount: amount
         }
     }
    }
   
}





export default TransactionChild







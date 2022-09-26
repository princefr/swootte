import { ArrowRightIcon } from "@heroicons/react/outline"
import Lottie from "lottie-react";
import Link from "next/link";
import loadingAnimation from "../../93134-not-found.json"

const EmptyEnterprise = () => {
    return (
        <div className="flex flex-col  w-full">

            <div className="flex h-full flex-col w-full justify-center items-center mt-20">
                <div className="flex h-96 w-96 items-center justify-center">
                    <Lottie animationData={loadingAnimation} loop={false} />
                </div>
                <h2 className="text-2xl font-medium">
                    il y'a rien ici ....
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                    Ajoutez une entreprise pour commencer à recevoir des paiements
                </p>


                <Link href="/enterprise/create">
                    <a className="inline-flex items-center px-3 py-4 rounded-xl mt-2 font-medium text-white bg-black text-sm  hover:bg-opacity-40">
                        Ajouter une entreprise
                        <ArrowRightIcon className="flex-shrink-0 w-4 h-4 ml-3"></ArrowRightIcon>
                    </a>
                </Link>



            </div>
        </div>

    )
}


export default EmptyEnterprise
import Link from 'next/link'

export function SendMoneyButton() {


    return (
        <div className="relative inline-block text-left">
            <Link href="/home/send_money">
                <button  className="transition ease-out duration-700 w-full mr2  rounded-lg bg-gray-200  flex items-center space-x-2 px-2 py-2 focus:outline-none focus:shadow-outline text-xs font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    <span className="font-montserrat text-xs">Envoyer</span>
                </button>
            </Link>
        </div>
    )
}


export default SendMoneyButton
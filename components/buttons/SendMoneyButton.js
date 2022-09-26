import Link from 'next/link'
import { ArrowUpIcon } from '@heroicons/react/outline'

export function SendMoneyButton() {


    return (
        <div className="relative inline-block text-left">
            <Link href="/home/send_money">
                <button  className="transition ease-out duration-700 w-full mr-2  rounded-lg bg-gray-200  flex items-center space-x-2 px-2 py-2 focus:outline-none focus:shadow-outline text-xs font-medium">
                    <ArrowUpIcon className='h-6 w-6'></ArrowUpIcon>
                    <span className="font-montserrat text-xs">Envoyer</span>
                </button>
            </Link>
        </div>
    )
}


export default SendMoneyButton
import { TrashIcon } from "@heroicons/react/solid"
import Link from 'next/link'





const BurnTokenButton = () => {
    return (
        <Link href={"/token/burn"}>
        <button className="transition ease-out duration-700 w-full mr-2  rounded-lg bg-gray-200  flex items-center space-x-2 px-2 py-2 focus:outline-none focus:shadow-outline text-xs font-medium">
                <TrashIcon className="h-4 w-4 text-gray-700"></TrashIcon>
                <span className="font-montserrat text-sm font-light">Burn</span>
        </button>
        </Link>
        

    )
}


export default BurnTokenButton
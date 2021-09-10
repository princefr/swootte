import { UserRemoveIcon } from "@heroicons/react/solid"

import Link from 'next/link'



const FreezeTokenButton = () => {
    return (
        <Link href={"token/freeze_account"}>
        <button className="transition ease-out duration-700 w-full mr-2  rounded-lg bg-gray-200  flex items-center space-x-2 px-2 py-2 focus:outline-none focus:shadow-outline text-xs font-medium">
                <UserRemoveIcon className="h-4 w-4 text-gray-700"></UserRemoveIcon>
                <span className="font-montserrat text-sm  font-light">Freeze account</span>
            </button>
            </Link>
        

    )
}


export default FreezeTokenButton
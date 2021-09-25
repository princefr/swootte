import { PlusSmIcon } from "@heroicons/react/solid"
import Link from 'next/link'





const MintTokenButton = ({token}) => {

    return (
        <Link href={{
            pathname: "token/mint/[id]",
            query: {id: token}
        }}>
        <button  className="transition ease-out duration-700 w-full mr-2  rounded-lg bg-gray-200  flex items-center space-x-2 px-2 py-2 focus:outline-none focus:shadow-outline text-xs font-medium">
                <PlusSmIcon className="h-4 w-4 text-gray-700"></PlusSmIcon>
                <span className="font-montserrat text-sm font-light">Mint</span>
            </button>
            </Link>

    )
}


export default MintTokenButton
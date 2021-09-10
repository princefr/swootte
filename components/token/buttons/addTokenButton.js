
import { PlusIcon } from '@heroicons/react/solid'
import Link from 'next/link'



const AddTokenButton = () => {
    return (
        <Link href={"/token/add_existing_token"}>
            <button className="flex flex-row items-center space-x-2 ml-0">
                <PlusIcon className="h-6 w-6"></PlusIcon>
                <span className="font-montserrat text-sm  font-light">Add existing token</span>
            </button>
        </Link>
    )
}


export default AddTokenButton
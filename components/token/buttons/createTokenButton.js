
import {  PlusIcon} from "@heroicons/react/solid"
import Link from 'next/link'

const CreateTokenButton = () => {
    return (
        <Link href={"/token/create_token"}>
            <button className="flex flex-row items-center space-x-2 ml-0">
                    <PlusIcon className="h-6 w-6"></PlusIcon>
                    <span className="font-montserrat text-sm  font-light">Create token</span>
            </button>
        </Link>
    )
}



export default CreateTokenButton
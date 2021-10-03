
import { PlusIcon, ViewGridAddIcon } from '@heroicons/react/solid'
import Link from 'next/link'



const AddAgencyButton = () => {
    return (
        <Link href={"/transferts/add_agency"}>
            <button className="flex flex-row items-center space-x-2 ml-0">
                <ViewGridAddIcon className="h-6 w-6"></ViewGridAddIcon>
                <span className="font-montserrat text-sm  font-light">Add aggency</span>
            </button>
        </Link>
    )
}


export default AddAgencyButton
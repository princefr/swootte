
import Link from 'next/link'

function AddDeposit() {
    return (
        <Link href={"/home/deposit_money"}>
            <button className="transition ease-out duration-700 w-full mr-2  rounded-lg bg-gray-200  flex items-center space-x-2 px-2 py-2 focus:outline-none focus:shadow-outline text-xs font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span className="font-montserrat text-xs whitespace-nowrap">Dépot</span>
            </button>
        </Link>
    )
}





export default AddDeposit
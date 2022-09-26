import Link from 'next/link'


const CloseIconNavWithTitle = ({ title}) => {
    return (
        <div className="flex h-14 flex-row items-center space-x-4 divide-x border-b px-4 top-0">
            <div className="flex">
                <Link href="/home">
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </a>
                </Link>
            </div>
            <div className="px-6 text-gray-600">{title}</div>
        </div>
    )
}


export default CloseIconNavWithTitle
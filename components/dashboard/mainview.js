
import ReceiveMoneyButton from "../buttons/ReceiveMoneyButton"
import SendMoneyButton from "../buttons/SendMoneyButton"
import { PhotoView } from "./userpicture"


const PictureOnDashboard = (props) => {
    const { loading, error, data, } = props

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <div className=" flex flex-row space-x-4 mt-5">
            <PhotoView photoUrl={data.usersExist.photoUrl} height={20} width={20}></PhotoView>
            <div className="flex flex-col justify-center items-start mb-5">
                <div className="text-xl font-semibold">Good morning, {data.usersExist.first_name}</div>
                <div className="flex flex-row space-x-8">
                    <div className="flex flex-row space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mt-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <div className="text-gray-500 text-sm mt-1">Duke street studio</div>
                    </div>
                    <div className="flex flex-row space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mt-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        <div className="text-gray-500 text-sm mt-1">Verified account</div>
                    </div>
                </div>
            </div>
        </div>
    )
}



const MainView = (props) => {
    return (
        <div className="flex flex-col  w-full">

            <div className="h-28 w-full bg-white border-t-1 border-black flex flex-row justify-between px-12">

                <PictureOnDashboard {...props}></PictureOnDashboard>

                <div className="flex flew-row justify-center space-x-6 items-center">

                    <div className="flex flex-row space-x-4">
                        <ReceiveMoneyButton></ReceiveMoneyButton>
                        <SendMoneyButton></SendMoneyButton>
                    </div>


                </div>
            </div>


            <div className="text-xl  px-12  mt-6">
                Overview
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-full px-12  mt-4 items-center justify-center mx-auto">
                <div className="flex items-center p-4 bg-white rounded">
                    <div className="flex flex-shrink-0 items-center justify-center bg-gray-200 h-16 w-16 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                    </div>
                    <div className="flex-grow flex flex-col ml-4">
                        <span className="text-xl font-bold">$8,430</span>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-500">Revenue last 30 days</span>
                            <span className="text-green-500 text-sm font-semibold ml-2">+12.6%</span>
                        </div>
                    </div>

                </div>


                <div className="flex items-center p-4 bg-white rounded">
                    <div className="flex flex-shrink-0 items-center justify-center bg-red-200 h-16 w-16 rounded-full">
                        <svg className="w-6 h-6 fill-current text-red-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="flex-grow flex flex-col ml-4">
                        <span className="text-xl font-bold">211</span>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-500">Sales last 30 days</span>
                            <span className="text-red-500 text-sm font-semibold ml-2">-8.1%</span>
                        </div>
                    </div>
                </div>


                <div className="flex items-center p-4 bg-white rounded">
                    <div className="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded-full">
                        <svg className="w-6 h-6 fill-current text-green-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="flex-grow flex flex-col ml-4">
                        <span className="text-xl font-bold">140</span>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-500">Customers last 30 days</span>
                            <span className="text-green-500 text-sm font-semibold ml-2">+28.4%</span>
                        </div>
                    </div>
                </div>
            </div>



            <div className="text-xl items-start left-0 px-12 mt-6">
                Recent activity
            </div>

            <div className="flex flex-col px-12 py-4">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Title
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Role
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="" />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">
                                                        Jane Cooper
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        jane.cooper@example.com
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">Regional Paradigm Technician</div>
                                            <div className="text-sm text-gray-500">Optimization</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                Active
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            Admin
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                                        </td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}



export default MainView
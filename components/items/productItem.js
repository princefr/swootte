import { useMutation, useQuery } from "@apollo/client"
import { useContext } from "react"
import { DeviseContext } from "../../context/DeviseContext"
import { FirebaseUIDContext } from "../../context/FirebaseUIDContext"
import { GET_PRODUCTS } from "../../queries/getProducts"
import Link from 'next/link'
import { TrashIcon } from "@heroicons/react/solid"
import { REMOVE_PRODUCT } from "../../mutation/removeProduct"
import { Transition } from "@headlessui/react"
import { useNotification } from "../../notifications/NotificationContext"

export const SpinLogo = ({height, width}) => {
    return(
        <svg className={`animate-spin -ml-1 mr-3 ${height} ${width} text-white`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
    )
}

const RemoveProductButton = ({product}) => {
    const [RemoveProduct, { loading }] = useMutation(REMOVE_PRODUCT)
    const dispatch = useNotification()



    const handleRemoveProduct = (event) => {
        event.preventDefault()
        RemoveProduct({
            variables: {
                product_id: product._id
            }
        }).then(() => {
            dispatch({
                payload: {
                    type: "SUCCESS",
                    title: "Product",
                    message: "success removing product"
                }
            })
        }).catch((err) => {
            dispatch({
                payload: {
                    type: "ERROR",
                    title: "Product",
                    message: err.message
                }
            })
        })
    }

    return (
        <button onClick={handleRemoveProduct} className="flex flex-row space-x-2 items-center bg-red-500 p-1 px-2 text-white rounded-lg">
                <Transition show={!loading}>
                    <TrashIcon className="h-4"></TrashIcon>
                </Transition>
                <Transition show={loading}>
                    <SpinLogo height={"h-4"} width={"w-4"}></SpinLogo>
                </Transition>
                <span>Remove</span>
       </button>
    )
}

const ProductItem = ({product}) => {
    return (
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
                                                <td className="py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <RemoveProductButton product={product}></RemoveProductButton>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <Link href={`/products/${product._id}`}>
                                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">Voir</a>
                                                    </Link>
                                                </td>
                                            </tr>


                                        </tbody>
    )
}


function ProductItems({activity}) {
    const { firebaseUID, }  = useContext(FirebaseUIDContext)
    const {Devise, } = useContext(DeviseContext)
    const {loading, error, data, refetch} = useQuery(GET_PRODUCTS)

    if (loading) return <p>Loading ...</p>;
    if (error) return `Error! ${error}`;

  
    
    return (
        <div className="-my-2 overflow-x-auto sm:-mx-6 mt-5 lg:-mx-8">
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
                                                <th scope="col" className="relative px-6 py-3">
                                                    <span className="sr-only">View</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        {
                                            data.getProducts.map((product) => {
                                                return <ProductItem product={product}></ProductItem> 
                                            })
                                        }
                                    </table>
                                </div>
                            </div>
                        </div>
    )
}



export default ProductItems
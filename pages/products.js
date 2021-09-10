

import Dashboard from "../components/dashboard/dashboard"
import AddProductButton from "../components/products/buttons/addProduct"
import ExportProductsButton from "../components/products/buttons/exportProductsButton"
import ExportTarrifButton from "../components/products/buttons/exportTarrifButton"
import FilterProductsButton from "../components/products/buttons/FilterProductsButton"
import ProductItems from "../components/items/productItem"


export default function Products() {

    return (
        <Dashboard pageName={"Products"}>{
            <div>
                <header className="bg-white shadow-b flex flex-row justify-between items-start p-4">
                    <div className="px-8">
                        <h1 className="text-3xl font-bold text-gray-900">Products</h1>
                    </div>
                    <div className="flex flex-row space-x-3">
                        <FilterProductsButton></FilterProductsButton>
                        <ExportTarrifButton></ExportTarrifButton>
                        <ExportProductsButton></ExportProductsButton>
                        <AddProductButton></AddProductButton>
                    </div>

                </header>

                <div className="flex flex-col px-12">
                    <div className="flex flex-col">
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                        <ProductItems></ProductItems>
                    </div>


                    
                </div>
            </div>
        }</Dashboard>
    )
}
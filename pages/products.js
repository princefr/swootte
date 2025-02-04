

import Dashboard from "../components/dashboard/dashboard"
import AddProductButton from "../components/products/buttons/addProduct"
import ExportProductsButton from "../components/products/buttons/exportProductsButton"
import ExportTarrifButton from "../components/products/buttons/exportTarrifButton"
import FilterProductsButton from "../components/products/buttons/FilterProductsButton"
import ProductItems from "../components/items/productItem"
import { AuthAction, withAuthUser} from "next-firebase-auth"


export  function Products({token}) {
    return (
        <Dashboard pageName={"Products"} token={token}>{
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
                    <div>Retrouvez dans ce menu absolument tout ce qui est en lien avec les elements de que vous vendez.
                        il vous est possible d'ajouter , de supprimer de nouveau produit.
                        LA comptabilité est facilité avec les exports de vos donnnées</div>
                        <ProductItems></ProductItems>
                    </div>


                    
                </div>
            </div>
        }</Dashboard>
    )
}


export default withAuthUser({whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN })(Products)
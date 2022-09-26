
import { ArrowRightIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'
import ShippingDelaySelect from './shippingdelaySelect'


const delays = [
    { name: "Dans un delai d'un jour" },
    { name: "Dans un delai de deux semaines" },
    { name: "Dans un delai d'un mois" },
    { name: "Dans un delai de plus d'un mois" },
  ]

const ExecutionInfoMenu = ({onClick}) => {
    const [sellingPhysicalGoods, setSellingPhysicalGoods] = useState(() => {
        const saved = JSON.parse(localStorage.getItem("sellingPhysicalGoods"))
        return saved || false
    })
    const [shippinByMyOwn, setShippinByMyOwn] = useState(() => {
        const saved = JSON.parse(localStorage.getItem("shippinByMyOwn"))
        return saved || false
    })
    
    const [delay, setDelay] = useState(() => {
        const saved = JSON.parse(localStorage.getItem("_delay"))
        return saved || delays[0]
    })



    useEffect(() => {
        localStorage.setItem("sellingPhysicalGoods", JSON.stringify(sellingPhysicalGoods))
    }, [sellingPhysicalGoods])


    useEffect(() => {
        localStorage.setItem("shippinByMyOwn", JSON.stringify(shippinByMyOwn))
    }, [shippinByMyOwn])

    useEffect(() => {
        
        localStorage.setItem("delay", delay.name)
        localStorage.setItem("_delay", JSON.stringify(delay))
    }, [delay])


    return (
        <div className='flex flex-col items-center justify-center w-96'>
            <div className='flex text-3xl justify-start'>Veuillez décrire votre processus d'exécution des commandes</div>
            <div className='flex text-l text-gray-600 justify-start pt-2'>Pour garantir la conformité de votre entreprise, nous souhaitons en savoir plus sur la manière dont vous fournissez vos produits ou services.</div>
            <form className='mt-10'>
                <div className='flex flex-col space-y-4 pb-8'>
                    <div  className='flex flex-col'>
                    <div className="col-span-6 sm:col-span-3 w-96">
                        <label htmlFor="title1" className="block text-sm font-medium text-gray-700 py-3">Vendez vous des biens physiques?</label>
                        <input value={sellingPhysicalGoods} checked={sellingPhysicalGoods}  onChange={(e) => {setSellingPhysicalGoods(!sellingPhysicalGoods)}} id="default-radio-1" type="radio" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="disabled-radio-1" className="ml-2 text-sm">Oui</label>
                    </div>

                    <div className="col-span-6 sm:col-span-3 w-96">
                        <input value={sellingPhysicalGoods == false} checked={sellingPhysicalGoods == false} onChange={(e) => {setSellingPhysicalGoods(!sellingPhysicalGoods)}} id="default-radio-1" type="radio" name="default-radio" className="w-4 h-4 text-blue-600 bg-green-400 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 " />
                        <label htmlFor="disabled-radio-1" className="ml-2 text-sm">Non</label>
                    </div>
                    </div>

                    {
                        sellingPhysicalGoods? <div className='flex flex-col'>
                        <div className="col-span-6 sm:col-span-3 w-96">
                            <label htmlFor="title1" className="block text-sm font-medium text-gray-700 py-3">Expédiez-vous le produit par vos propres moyens ?</label>
                            <input value={shippinByMyOwn} checked={shippinByMyOwn} onChange={(e) => {setShippinByMyOwn(!shippinByMyOwn)}} id="default-radio-2" type="radio" name="default-radio2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="disabled-radio-2" className="ml-2 text-sm  px-2">Oui</label>
                        </div>

                        <div className="col-span-6 sm:col-span-3 w-96">
                            <input value={shippinByMyOwn == false} checked={shippinByMyOwn == false} onChange={(e) => {setShippinByMyOwn(!shippinByMyOwn)}} id="default-radio-2" type="radio" name="default-radio2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="disabled-radio-2" className="ml-2 text-sm  px-2">Non, les produits sont expédiés par un tiers (par exemple une entreprise de logistique)</label>
                        </div>
                    </div> : null
                    }


                    <ShippingDelaySelect delays={delays} delay={delay} setDelaySelected={setDelay}></ShippingDelaySelect>







                    <div className='pt-4'>
                        <button onClick={onClick} type="button" className="flex flex-row space-x-4 w-96 mt-7 items-center justify-center text-white bg-black  font-medium text-sm px-6 py-3  focus:outline-none outline-none">
                            <span>Continuer</span>
                            <ArrowRightIcon className='h-4 w-4 text-white'></ArrowRightIcon>
                        </button>
                    </div>
                </div>


            </form>

        </div>
    )
}



export default ExecutionInfoMenu

import { useMutation } from '@apollo/client'
import { Transition } from '@headlessui/react'
import { ArrowRightIcon } from '@heroicons/react/solid'
import { useContext, useEffect, useState } from 'react'
import { EnterpriseContext } from '../../context/EnterpriseContext'
import { UPDATE_EXECUTION_INFORMATION } from '../../mutation/settings/updateExecutionInfo'
import { useNotification } from '../../notifications/NotificationContext'
import ShippingDelaySelect from '../enterprise/executionInfo/shippingdelaySelect'
import LoadingIcon from '../icons/LoadingIcon'


const delays = [
    { name: "Dans un delai d'un jour" },
    { name: "Dans un delai de deux semaines" },
    { name: "Dans un delai d'un mois" },
    { name: "Dans un delai de plus d'un mois" },
  ]

const ExecutionInfoMenuEdit = () => {
    const [sellingPhysicalGoods, setSellingPhysicalGoods] = useState(false)
    const [shippinByMyOwn, setShippinByMyOwn] = useState(false)
    const {enterpriseId, setEnterpriseId} = useContext(EnterpriseContext)
    const [delay, setDelay] = useState(delays[0])

    const dispatch = useNotification()
    const [UpdateEnterpriseExecutionInfo, { loading }] = useMutation(UPDATE_EXECUTION_INFORMATION)


    useEffect(() => {
        if(!enterpriseId.length) return;
        setSellingPhysicalGoods(enterpriseId.filter((company) => company.default_enterprise)[0].sellingPhysicalGoods)
        setShippinByMyOwn(enterpriseId.filter((company) => company.default_enterprise)[0].selfShippingProduct)
        setDelay(delays.filter((delay) => delay.name == enterpriseId.filter((company) => company.default_enterprise)[0].shippingDelay)[0])
    }, [enterpriseId])

    const save = (e) => {
        e.preventDefault()
        UpdateEnterpriseExecutionInfo({
            variables: {
                enterpriseId: enterpriseId.filter((company) => company.default_enterprise)[0]._id,
                sellingPyshicalGoods: sellingPhysicalGoods,
                selfShipping: shippinByMyOwn,
                shippingDelay: delay.name
            }
        }).then((success) => {
            setEnterpriseId(success.data.updateExecutionInformation)
            dispatch({
                payload: {
                    type: "SUCCESS",
                    title: "ENTERPRISE",
                    message: "L'entreprise a été mise à jour"
                }
            })
        }).catch((err) => {
            dispatch({
                payload: {
                    type: "ERROR",
                    title: "ENTERPRISE",
                    message: err.message
                }
            })
        })
    }


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
                        <button onClick={save} type="button" className="flex flex-row space-x-4 w-96 mt-7 items-center justify-center text-white bg-black  font-medium text-sm px-6 py-3  focus:outline-none outline-none">
                            <Transition show={loading}>
                                    <LoadingIcon/>
                            </Transition>
                            <span>Sauvegarder</span>
                            <Transition show={!loading}>
                                <ArrowRightIcon className='h-4 w-4 text-white'></ArrowRightIcon>
                            </Transition>
                        </button>
                    </div>
                </div>


            </form>

        </div>
    )
}



export default ExecutionInfoMenuEdit
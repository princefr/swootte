
import { ArrowRightIcon } from '@heroicons/react/solid'
import { CheckIcon } from '@heroicons/react/outline'
import { useMutation } from '@apollo/client'
import { useNotification } from '../../../notifications/NotificationContext'
import { CREATE_ENTERPRISE } from '../../../mutation/enterprise/createEnterprise'
import { useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import { Transition } from '@headlessui/react'
import LoadingIcon from '../../icons/LoadingIcon'

const VerifyandSendMenu = ({reValidateEnterpriseType, validateEnterpriseTypePage, validatePersonnalInformationPage, validateEnterpriseInformation}) => {
    const [CreateEnterprise, { loading }] = useMutation(CREATE_ENTERPRISE)
    const dispatch = useNotification()

    // enterprise type
    const [countryDisplayed, setCountryDisplayed] = useState('');
    const [selectedEnterpriseType, setSelectedEnterpriseType] = useState('');


    // public information
    const [usePhone, setPhone] = useState("")
    const [enterpriseName, setEnterpriseName] = useState("")
    const [libelleTx, setLibelleTx] = useState("")
    const [abregedLibelleTx, setAbregedLibelleTx] = useState("")
    const [enterpriseEmail, setEnterpriseEmail] = useState("")

    const [sellingPhysicalGoods, setSellingPhysicalGoods] = useState(false)
    const [shippinByMyOwn, setShippinByMyOwn] = useState(false)
    const [delay, setDelay] = useState("")

    // enterprise info
    const [rccm, setRccm] = useState("")
    const [activityType, setActivityType] = useState()
    const [website, setWebsite] = useState("")
    const [enterpriseDescription, setEntrepriseDescription] = useState("")

    // personal info enterprise creator
    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setStates] = useState("")
    const [zip, setZip] = useState("")
    
    const router = useRouter()


    useEffect(() => {
        //enterprise public information
        setCountryDisplayed(localStorage.getItem("countryDisplayed"))
        setSelectedEnterpriseType(localStorage.getItem("selectedEnterpriseType"))

        setPhone(localStorage.getItem("usePhone"))
        setEnterpriseName(localStorage.getItem("enterpriseName"))
        setLibelleTx(localStorage.getItem("libelleTx"))
        setAbregedLibelleTx(localStorage.getItem("abregedLibelleTx"))
        setEnterpriseEmail(localStorage.getItem("enterpriseEmail"))


        // excution
        setSellingPhysicalGoods(JSON.parse(localStorage.getItem("sellingPhysicalGoods")))
        setShippinByMyOwn(JSON.parse(localStorage.getItem("shippinByMyOwn"))) 
        setDelay(localStorage.getItem("delay"))

        //enterprise info
        setRccm(localStorage.getItem("rccm"))
        setActivityType(localStorage.getItem("activityType"))
        setWebsite(localStorage.getItem("website"))
        setEntrepriseDescription(localStorage.getItem("enterpriseDescription"))

        //enterprise creator info
        setNom(localStorage.getItem("nom"))
        setPrenom(localStorage.getItem("prenom"))
        setEmail(localStorage.getItem("email"))
        setAddress(localStorage.getItem("address"))
        setCity(localStorage.getItem("city"))
        setStates(localStorage.getItem("state"))
        setZip(localStorage.getItem("zip"))
    }, [])

    const _createEnterprise = (event) => {
        event.preventDefault()
        CreateEnterprise({
            variables: {
                enterprise: {
                    name: enterpriseName,
                    country: countryDisplayed,
                    address:  {
                        title: "",
                        location: {
                            longitude: 0.0,
                            latitude: 0.0
                        },
                        city: ""
                    },
                    logoUrl: "String",
                    website: website,
                    type: selectedEnterpriseType,
                    rccm: rccm,
                    activitySector: activityType,
                    person: {
                        first_name: nom,
                        last_name: prenom,
                        email: email,
                        address: address,
                        zip: zip,
                        state: state,
                        city: city
                    },
                    description: enterpriseDescription,
                    sellingPhysicalGoods: sellingPhysicalGoods,
                    selfShippingProduct: shippinByMyOwn,
                    shippingDelay: delay,
                    transactionLibele: libelleTx,
                    abregedLibele: abregedLibelleTx,
                    phone: usePhone,
                    email: enterpriseEmail
                }
            }
        }).then(() => {
            dispatch({
                payload: {
                    type: "SUCCESS",
                    title: "Enterprise",
                    message: "Nouvelle entreprise créée"
                }
            })
            router.push("/home")

            localStorage.removeItem("countryDisplayed")
            localStorage.removeItem("selectedEnterpriseType")
    
            localStorage.removeItem("usePhone")
            localStorage.removeItem("enterpriseName")
            localStorage.removeItem("libelleTx")
            localStorage.removeItem("abregedLibelleTx")
            localStorage.removeItem("enterpriseEmail")
    
    
            // excution
            localStorage.removeItem("sellingPhysicalGoods")
            localStorage.removeItem("shippinByMyOwn")
            localStorage.removeItem("delay")
    
            //enterprise info
            localStorage.removeItem("rccm")
            localStorage.removeItem("activityType")
            localStorage.removeItem("website")
            localStorage.removeItem("enterpriseDescription")
    
            //enterprise creator info
            localStorage.removeItem("nom")
            localStorage.removeItem("prenom")
            localStorage.removeItem("email")
            localStorage.removeItem("address")
            localStorage.removeItem("city")
            localStorage.removeItem("state")
            localStorage.removeItem("zip")
            
        }).catch((err) => {
            dispatch({
                payload: {
                    type: "ERROR",
                    title: "Enterprise",
                    message: err.message
                }
            })
        })
    }
    
    return (
        <div className='flex flex-col items-center justify-center w-96'>
            <div className='flex text-2xl justify-start'>Vérifier et terminer</div>
            <div className='flex text-sm text-gray-600 justify-start'>Vous pourrez bientôt commencer à découvrir Stripe. Veuillez d'abord vérifier et confirmer vos informations.</div>
            <form className='mt-10'>
                <div className='flex flex-col space-y-4 pb-8'>


                    {(() => {
                        if(!countryDisplayed.length || !selectedEnterpriseType.length) {
                            return    <div className={`flex flex-row items-center   rounded-lg bg-red-600 bg-opacity-20 text-sm px-6 py-3 font-bold outline-none justify-between`}>
                            <div className='text-gray-600'>Type d'entreprise</div>
                            <button type='buttoon' className='flex flex-row bg-gray-300 p-1 px-2 rounded-lg'>
                                <span>modifier</span>
                            </button>
                        </div>
                        }else{
                            return  <div className={`flex flex-row  items-center rounded-lg bg-green-400 bg-opacity-20 text-sm px-6 py-3 font-bold outline-none justify-between`}>
                                <div className='text-gray-600'>Type d'entreprise</div>
                                <button onClick={reValidateEnterpriseType} type='buttoon' className='flex flex-row p-1 px-2'>
                                    <CheckIcon className='h-6 w-6 bg-green-200 text-green-400 rounded-full'></CheckIcon>
                                </button>
                            </div>
                        }
                    })()}



                    {(() => {
                        if(!nom.length || !prenom.length || !email.length || !address.length || !city.length || !state.length || !zip.length) {
                            return    <div className={`flex flex-row items-center   rounded-lg bg-red-600 bg-opacity-20 text-sm px-6 py-3 font-bold outline-none justify-between`}>
                            <div className='text-gray-600'>Information personnelles</div>
                            <button onClick={validatePersonnalInformationPage} type='buttoon' className='flex flex-row bg-gray-300 p-1 px-2 rounded-lg'>
                                <span>modifier</span>
                            </button>
                        </div>
                        }else{
                            return  <div className={`flex flex-row  items-center rounded-lg bg-green-400 bg-opacity-20 text-sm px-6 py-3 font-bold outline-none justify-between`}>
                                <div className='text-gray-600'>Information personnelles</div>
                                <button  type='buttoon' className='flex flex-row p-1 px-2'>
                                    <CheckIcon className='h-6 w-6 bg-green-200 text-green-400 rounded-full'></CheckIcon>
                                </button>
                            </div>
                        }
                    })()}



                    {(() => {
                        if(!rccm.length || !activityType.length || !enterpriseDescription.length) {
                            return    <div className={`flex flex-row items-center   rounded-lg bg-red-600 bg-opacity-20 text-sm px-6 py-3 font-bold outline-none justify-between`}>
                            <div className='text-gray-600'>Information sur l'entreprise</div>
                            <button onClick={validatePersonnalInformationPage} type='buttoon' className='flex flex-row bg-gray-300 p-1 px-2 rounded-lg'>
                                <span>modifier</span>
                            </button>
                        </div>
                        }else{
                            return  <div className={`flex flex-row  items-center rounded-lg bg-green-400 bg-opacity-20 text-sm px-6 py-3 font-bold outline-none justify-between`}>
                                <div className='text-gray-600'>Information sur l'entreprise</div>
                                <button  type='buttoon' className='flex flex-row p-1 px-2'>
                                    <CheckIcon className='h-6 w-6 bg-green-200 text-green-400 rounded-full'></CheckIcon>
                                </button>
                            </div>
                        }
                    })()}


                    <div className={`flex flex-row  items-center rounded-lg bg-green-400 bg-opacity-20 text-sm px-6 py-3 font-bold outline-none justify-between`}>
                        <div className='text-gray-600'>Informations d'exécution</div>
                        <button  type='buttoon' className='flex flex-row p-1 px-2'>
                            <CheckIcon className='h-6 w-6 bg-green-200 text-green-400 rounded-full'></CheckIcon>
                        </button>
                    </div>



                    {(() => {
                        if(!usePhone.length || !enterpriseName.length || !libelleTx.length || !abregedLibelleTx.length || !enterpriseEmail.length) {
                            return    <div className={`flex flex-row items-center   rounded-lg bg-red-600 bg-opacity-20 text-sm px-6 py-3 font-bold outline-none justify-between`}>
                            <div className='text-gray-600'>Informations publiques</div>
                            <button onClick={validatePersonnalInformationPage} type='buttoon' className='flex flex-row bg-gray-300 p-1 px-2 rounded-lg'>
                                <span>modifier</span>
                            </button>
                        </div>
                        }else{
                            return  <div className={`flex flex-row  items-center rounded-lg bg-green-400 bg-opacity-20 text-sm px-6 py-3 font-bold outline-none justify-between`}>
                                <div className='text-gray-600'>Informations publiques</div>
                                <button  type='buttoon' className='flex flex-row p-1 px-2'>
                                    <CheckIcon className='h-6 w-6 bg-green-200 text-green-400 rounded-full'></CheckIcon>
                                </button>
                            </div>
                        }
                    })()}


                    
                





                    <span className='text-xs pt-10'>
                        En soumettant ce formulaire, vous acceptez de vous conformer au Contrat d'utilisation du service Stripe et de recevoir des SMS automatisés de la part de Stripe, et vous attestez que les informations fournies sont complètes et exactes.
                    </span>

                    <div className='pt-1'>
                        <button onClick={_createEnterprise} type="button" className="flex flex-row space-x-4 w-96 mt-7 items-center justify-center text-white bg-black  font-medium text-sm px-6 py-3  focus:outline-none outline-none">
                            <Transition show={loading}>
                                <LoadingIcon/>
                            </Transition>
                            <span>Creer l'entreprise</span>
                            {
                                loading? null: <ArrowRightIcon className='h-4 w-4 text-white'></ArrowRightIcon>
                            }
                        </button>
                    </div>
                </div>


            </form>

        </div>
    )
}



export default VerifyandSendMenu
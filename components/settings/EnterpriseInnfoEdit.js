
import { useMutation} from '@apollo/client'
import { Transition } from '@headlessui/react'
import { ArrowRightIcon } from '@heroicons/react/solid'
import { useContext, useEffect, useState } from 'react'
import { EnterpriseContext } from '../../context/EnterpriseContext'
import { UPDATE_ENTERPRISE_INFORMATION } from '../../mutation/settings/updateEnterpriseInformation'
import { useNotification } from '../../notifications/NotificationContext'
import ActivitySector from '../enterprise/enterpriseInfo/activitySector'
import LoadingIcon from '../icons/LoadingIcon'

const activities = [
    { name: 'Agroalimentaire' },
    { name: 'Bois-Papier-Carton-Imprimerie' },
    { name: 'Chimie-Parachimie' },
    { name: 'Édition-Communication-Multimédia' },
    { name: 'Études et conseils' },
    { name: 'Machines et équipements-Automobile' },
    { name: 'Plastique-Caoutchouc' },
    { name: 'Textile-Habillement-Chaussure' },
    { name: 'Banque-Assurance' },
    { name: 'BTP-Matériaux de construction' },
    { name: 'Commerce-Négoce-Distribution' },
    { name: 'Électronique-Électricité' },
    { name: 'Industrie pharmaceutique' },
    { name: 'Informatique-Télécoms' },
    { name: 'Métallurgie-Travail du métal' },
    { name: 'Services aux entreprises' },
    { name: 'Transports-Logistique' },
  ]

const EnterpriseInfoMenuEdit = () => {
    const [rccm, setRccm] = useState("")
    const [activityType, setActivityType] = useState(activities[0])
    const [website, setWebsite] = useState("")
    const [enterpriseDescription, setEntrepriseDescription] = useState("")
    const dispatch = useNotification()
    const {enterpriseId, setEnterpriseId} = useContext(EnterpriseContext)

    const [UpdateEnterpriseInfo, { loading }] = useMutation(UPDATE_ENTERPRISE_INFORMATION)


    useEffect(() => {
        if(!enterpriseId.length) return;
        setRccm(enterpriseId.filter((company) => company.default_enterprise)[0].rccm)
        setActivityType(activities.filter((activity) => activity.name == enterpriseId.filter((company) => company.default_enterprise)[0].sector)[0])
        setWebsite(enterpriseId.filter((company) => company.default_enterprise)[0].website)
        setEntrepriseDescription(enterpriseId.filter((company) => company.default_enterprise)[0].description)
    }, [enterpriseId])

    const save = (e) => {
        e.preventDefault()
        UpdateEnterpriseInfo({
            variables: {
                enterpriseId: enterpriseId.filter((company) => company.default_enterprise)[0]._id,
                rccm: rccm,
                website: website,
                description: enterpriseDescription,
                sector: activityType.name
            }
        }).then((result) => {
            setEnterpriseId(result.data.updateEnterpriseInformation)
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
            <div className='flex text-3xl justify-start'>Dites-nous en plus sur votre entreprise</div>
            <div className='flex text-l text-gray-600 justify-start pt-2'>Ces informations permettent à Stripe de mieux comprendre votre entreprise et ainsi de vous aider au mieux.</div>
            <form className='mt-10'>
                <div className='flex flex-col space-y-4 pb-8'>
                    <div className="col-span-6 sm:col-span-3 w-96">
                        <label htmlFor="first-name" className="flex flex-row text-sm font-medium text-gray-700 py-3">RCCM <p className='text-red-600'>{!rccm.length  ? '*': null}</p></label>
                        <input value={rccm} onChange={(e) => setRccm(e.target.value)} type="text"  placeholder='544-336-344'  className="w-full py-3 pl-3 pr-10 text-left bg-white  border-2 border-black cursor-default focus:outline-none  sm:text-sm" />
                    </div>

                    <ActivitySector activities={activities} activityType={activityType} setActivityselected={setActivityType}></ActivitySector>

                    <div className="col-span-6 sm:col-span-3 w-96">
                        <label htmlFor="first-name" className="flex flex-row text-sm font-medium text-gray-700 py-3">Site web de l'entreprise </label>
                        <input value={website} onChange={(e) => setWebsite(e.target.value)} type="text" name="first-name" id="first-name" placeholder='https://example.com' autoComplete="email" className="w-full py-3 pl-3 pr-10 text-left bg-white  border-2 border-black  cursor-default focus:outline-none  sm:text-sm" />
                    </div>

                    <div className="col-span-6 sm:col-span-3 w-96">
                        <label htmlFor="first-name" className="flex flex-row text-sm font-medium text-gray-700 py-3">Description de ce que fait l'entreprise <p className='text-red-600'>{!enterpriseDescription.length  ? '*': null}</p></label>
                        <textarea value={enterpriseDescription} onChange={(e) => setEntrepriseDescription(e.target.value)}  name="description" id="description"  className="w-full py-3 pl-3 pr-10 text-left bg-white  border-2 border-black  cursor-default focus:outline-none  sm:text-sm" />
                    </div>



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



export default EnterpriseInfoMenuEdit

import { ArrowRightIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'
import ActivitySector from './activitySector'

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

const EnterpriseInfoMenu = ({onClick}) => {
    const [rccm, setRccm] = useState(() => {
        const saved = localStorage.getItem("rccm")
        return saved || ""
    })

    const [activityType, setActivityType] = useState(() => {
        const saved = JSON.parse(localStorage.getItem("_activityType"))
        return saved || activities[0]
    })

    const [website, setWebsite] = useState(() => {
        const saved = localStorage.getItem("website")
        return saved || ""
    })

    const [enterpriseDescription, setEntrepriseDescription] = useState(() => {
        const saved = localStorage.getItem("enterpriseDescription")
        return saved || ""
    })


    useEffect(() => {
        localStorage.setItem("rccm", rccm)
    }, [rccm])

    useEffect(() => {
        localStorage.setItem("_activityType", JSON.stringify(activityType))
        localStorage.setItem("activityType", activityType.name)
    }, [activityType])

    useEffect(() => {
        localStorage.setItem("website", website)
    }, [website])

    useEffect(() => {
        localStorage.setItem("enterpriseDescription", enterpriseDescription)
    }, [enterpriseDescription])


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



export default EnterpriseInfoMenu
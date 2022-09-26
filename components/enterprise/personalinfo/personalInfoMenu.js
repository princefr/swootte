
import { ArrowRightIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'


const PersonalInfoMenu = ({onClick}) => {
    const [nom, setNom] = useState(() => {
        const saved = localStorage.getItem("nom")
        return saved || ""
    })
    const [prenom, setPrenom] = useState(() => {
        const saved = localStorage.getItem("prenom")
        return saved || ""
    })

    const [email, setEmail] = useState(() => {
        const saved = localStorage.getItem("email")
        return saved || ""
    })

    const [address, setAddress] = useState(() => {
        const saved = localStorage.getItem("address")
        return saved || ""
    })
    
    const [city, setCity] = useState(() => {
        const saved = localStorage.getItem("city")
        return saved || ""
    })
    const [state, setStates] = useState(() => {
        const saved = localStorage.getItem("state")
        return saved || ""
    })
    const [zip, setZip] = useState(() => {
        const saved = localStorage.getItem("zip")
        return saved || ""
    })


    useEffect(() => {
        localStorage.setItem("nom", nom)
    }, [nom])

    useEffect(() => {
        localStorage.setItem("prenom", prenom)
    }, [prenom])

    useEffect(() => {
        localStorage.setItem("email", email)
    }, [email])

    useEffect(() => {
        localStorage.setItem("address", address)
    }, [address])

    useEffect(() => {
        localStorage.setItem("city", city)
    }, [city])

    useEffect(() => {
        localStorage.setItem("state", state)
    }, [state])

    useEffect(() => {
        localStorage.setItem("zip", zip)
    }, [zip])

    return (
        <div className='flex flex-col items-center justify-center w-96'>
            <div className='flex text-2xl justify-start'>Vérifier vos informations personnelles</div>
            <div className='flex text-sm text-gray-600 justify-start'>Ces informations permettent à Stripe de vérifier votre identité et de garantir la sécurité de votre compte.</div>
            <form className='mt-10'>
                <div className='flex flex-col space-y-4 pb-8'>
                    <div className="col-span-6 sm:col-span-3 w-96">
                        <label htmlFor="first-name" className="flex flex-row text-sm font-medium text-gray-700 py-3">Dénomination sociale de la personne <p className='text-red-600'>{!nom.length || !prenom.length ? '*': null}</p></label>
                        <input value={nom} onChange={(e) => setNom(e.target.value)} type="text" name="first-name" id="first-name" placeholder='John' autoComplete="given-name" className="w-full py-3 pl-3 pr-10 text-left bg-white border-2 border-black  cursor-default focus:outline-none     sm:text-sm" />
                    </div>

                    <div className="col-span-6 sm:col-span-3 w-96">
                        <input value={prenom} onChange={(e) => setPrenom(e.target.value)} type="text" name="first-name" id="first-name" placeholder='John' autoComplete="family-name" className="w-full py-3 pl-3 pr-10 text-left bg-white border-2 border-black   cursor-default focus:outline-none    sm:text-sm" />
                    </div>

                    <div className="col-span-6 sm:col-span-3 w-96">
                        <label htmlFor="first-name" className="flex flex-row text-sm font-medium text-gray-700 py-3">Email address <p className='text-red-600'>{!email.length ? '*': null}</p></label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="first-name" id="first-name" placeholder='john@gmail.com' autoComplete="email" className="w-full py-3 pl-3 pr-10 text-left bg-white border-2 border-black   cursor-default focus:outline-none     sm:text-sm" />
                    </div>

                    <div className="col-span-6 sm:col-span-3 w-96">
                        <label htmlFor="first-name" className="flex flex-row text-sm font-medium text-gray-700 py-3">Adresse personnelle <p className='text-red-600'>{!address.length ? '*': null}</p></label>
                        <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" name="first-name" id="first-name" placeholder='300 allée des roses' autoComplete="email" className="w-full py-3 pl-3 pr-10 text-left bg-white border-2 border-black   cursor-default focus:outline-none     sm:text-sm" />
                    </div>
                    <div className="col-span-6 sm:col-span-3 w-96">
                        <label htmlFor="first-name" className="flex flex-row text-sm font-medium text-gray-700 py-3">City <p className='text-red-600'>{!city.length ? '*': null}</p></label>
                        <input value={city} onChange={(e) => setCity(e.target.value)} type="text" name="city" id="city" placeholder='Brazzaville' autoComplete="address-level2" className="w-full py-3 pl-3 pr-10 text-left bg-white border-2 border-black   cursor-default focus:outline-none     sm:text-sm" />
                    </div>

                    <div className="col-span-6 sm:col-span-3 w-96">
                        <label htmlFor="region" className="flex flex-row text-sm font-medium text-gray-700 py-3">State / Province <p className='text-red-600'>{!state.length ? '*': null}</p></label>
                        <input value={state} onChange={(e) => setStates(e.target.value)} type="text" name="region" id="region" placeholder='Brazzaville' autoComplete="address-level1" className="w-full py-3 pl-3 pr-10 text-left bg-white border-2 border-black   cursor-default focus:outline-none     sm:text-sm" />
                    </div>

                    <div className="col-span-6 sm:col-span-3 w-96">
                        <label htmlFor="postal-code" className="flex flex-row text-sm font-medium text-gray-700 py-3">ZIP / Postal code <p className='text-red-600'>{!zip.length ? '*': null}</p></label>
                        <input value={zip} onChange={(e) => setZip(e.target.value)} type="text" name="postal-code" placeholder='91000' id="postal-code" autoComplete="postal-code" className="w-full py-3 pl-3 pr-10 text-left bg-white border-2 border-black   cursor-default focus:outline-none     sm:text-sm" />
                    </div>

                    <div className='pt-4'>
                        <button onClick={onClick} type="button" className="flex flex-row space-x-4 w-96 mt-7 items-center justify-center 
                        text-white bg-black  font-medium text-sm px-6 py-3  focus:outline-none outline-none disabled:bg-opacity-40" disabled={!nom.length || !prenom.length || !email.length || !address.length || !city.length || !state.length || !zip.length}>
                            <span>Continuer</span>
                            <ArrowRightIcon className='h-4 w-4 text-white'></ArrowRightIcon>
                        </button>
                    </div>
                </div>


            </form>

        </div>
    )
}



export default PersonalInfoMenu
import { ArrowRightIcon } from '@heroicons/react/solid'
import PhonePicker from '../../countries/PhonePicker'
import React, { Fragment, useEffect, useState } from 'react'




const PublicInfoMenu = ({onClick}) => {
    const [countryDisplayed, setCountryDisplayed] = useState({ name: "CONGO", dial_code: "+242", code: "CG" });
    const [usePhone, setPhone] = useState(() => {
        const saved = localStorage.getItem("_usePhone")
        return saved || ""
    })

    const [enterpriseName, setEnterpriseName] = useState(() => {
        const saved = localStorage.getItem("enterpriseName")
        return saved || ""
    })
    const [libelleTx, setLibelleTx] = useState(() => {
        const saved = localStorage.getItem("libelleTx")
        return saved || ""
    })
    const [abregedLibelleTx, setAbregedLibelleTx] = useState(() => {
        const saved = localStorage.getItem("abregedLibelleTx")
        return saved || ""
    })
    const [enterpriseEmail, setEnterpriseEmail] = useState(() => {
        const saved = localStorage.getItem("enterpriseEmail")
        return saved || ""
    })

    const handlePhoneChange = (e) => {
        setPhone(e)
    }


    useEffect(() => {
        localStorage.setItem("_usePhone", usePhone)
        localStorage.setItem("usePhone", countryDisplayed.dial_code + usePhone)
    }, [usePhone])

    useEffect(() => {
        localStorage.setItem("enterpriseName", enterpriseName)
    }, [enterpriseName])

    useEffect(() => {
        localStorage.setItem("libelleTx", libelleTx)
    }, [libelleTx])

    useEffect(() => {
        localStorage.setItem("abregedLibelleTx", abregedLibelleTx)
    }, [abregedLibelleTx])

    useEffect(() => {
        localStorage.setItem("enterpriseEmail", enterpriseEmail)
    }, [enterpriseEmail])

    return (
        <div className='flex flex-col items-center justify-center w-96'>
            <div className='flex text-3xl justify-start'>Ajouter des informations publiques à l'intention des clients</div>
            <div className='flex text-l text-gray-600 justify-start pt-2'>Ces informations pourront apparaître sur les relevés de paiement, factures et reçus..</div>
            <form className='mt-10'>
                <div className='flex flex-col space-y-4 pb-8'>
                    <div className="col-span-6 sm:col-span-3 w-96">
                        <label htmlFor="title1" className="flex flex-row text-sm font-medium text-gray-700 py-3">Nom de l'entreprise <p className='text-red-600'>{!enterpriseName.length ? '*': null}</p> </label>
                        <input value={enterpriseName} onChange={((e) => {setEnterpriseName(e.target.value)})} type="text"  placeholder='Swootte ltd'  className="w-full py-3 pl-3 pr-10 text-left bg-white border-2 border-black   cursor-default focus:outline-none    sm:text-sm"  required/>
                        
                    </div>
                    <div className="col-span-6 sm:col-span-3 w-96">
                        <label htmlFor="title1" className="flex flex-row text-sm font-medium text-gray-700 py-3">Libellé de transaction <p className='text-red-600'>{!libelleTx.length ? '*': null}</p></label>
                        <input value={libelleTx} onChange={((e) => {setLibelleTx(e.target.value)})} type="text"  placeholder='SWOOTTE'  className="w-full py-3 pl-3 pr-10 text-left bg-white border-2 border-black   cursor-default focus:outline-none    sm:text-sm"  required/>
                    </div>

                    <div className="col-span-6 sm:col-span-3 w-96">
                        <label htmlFor="title1" className="flex flex-row text-sm font-medium text-gray-700 py-3">Libellé abrégé <p className='text-red-600'>{!abregedLibelleTx.length ? '*': null}</p> </label>
                        <input value={abregedLibelleTx} onChange={((e) => {setAbregedLibelleTx(e.target.value)})} type="text"  placeholder='SWOOT'  className="w-full py-3 pl-3 pr-10 text-left bg-white border-2 border-black   cursor-default focus:outline-none    sm:text-sm"  required/>
                    </div>

                    <div className="col-span-6 sm:col-span-3 w-96">
                        <label htmlFor="title1" className="flex flex-row text-sm font-medium text-gray-700 py-3">Numéro de téléphone de contact <p className='text-red-600'>{!usePhone.length || !countryDisplayed.name.length ? '*': null}</p></label>
                        <PhonePicker phoneValue={usePhone} onChange={handlePhoneChange} countryDisplayed={countryDisplayed} setCountryDisplayed={setCountryDisplayed}></PhonePicker>
                    </div>

                    <div className="col-span-6 sm:col-span-3 w-96">
                        <label htmlFor="title1" className="flex flex-row text-sm font-medium text-gray-700 py-3">Email de l'entreprise <p className='text-red-600'>{!enterpriseEmail.length ? '*': null}</p></label>
                        <input value={enterpriseEmail} onChange={((e) => {setEnterpriseEmail(e.target.value)})} type="text"  placeholder='contact@swotte.com'  className="w-full py-3 pl-3 pr-10 text-left bg-white border-2 border-black   cursor-default focus:outline-none    sm:text-sm" required/>
                    </div>

                    <div className='pt-4'>
                        <button disabled={!enterpriseName.length || !libelleTx.length || !abregedLibelleTx.length || !enterpriseEmail.length || !usePhone.length || !countryDisplayed.name.length} onClick={onClick} type="button" className="flex flex-row space-x-4 w-96 mt-7 items-center justify-center text-white bg-black  font-medium text-sm px-6 py-3  focus:outline-none outline-none disabled:bg-opacity-40">
                            <span>Continuer</span>
                            <ArrowRightIcon className='h-4 w-4 text-white'></ArrowRightIcon>
                        </button>
                    </div>
                </div>


            </form>

        </div>
    )
    
}



export default PublicInfoMenu
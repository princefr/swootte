import { ArrowRightIcon } from '@heroicons/react/solid'
import PhonePicker from '../countries/PhonePicker';
import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useMutation } from '@apollo/client';
import { useNotification } from '../../notifications/NotificationContext';
import { UPDATE_PUBLIC_INFORMATION } from '../../mutation/settings/updatePublicInformation';
import { Transition } from '@headlessui/react';
import LoadingIcon from '../icons/LoadingIcon';
import { EnterpriseContext } from '../../context/EnterpriseContext';




const PublicInfoMenuEdit = () => {
    const [countryDisplayed, setCountryDisplayed] = useState({ name: "CONGO", dial_code: "+242", code: "CG" });
    const [usePhone, setPhone] = useState("")
    const [enterpriseName, setEnterpriseName] = useState("")
    const [libelleTx, setLibelleTx] = useState("")
    const [abregedLibelleTx, setAbregedLibelleTx] = useState("")
    const [enterpriseEmail, setEnterpriseEmail] = useState("")
    const dispatch = useNotification()
    const [UpdateEnterprisePublicInfo, { loading }] = useMutation(UPDATE_PUBLIC_INFORMATION)
    const {enterpriseId, setEnterpriseId} = useContext(EnterpriseContext)


    useEffect(() => {
        if(!enterpriseId.length) return;
        setEnterpriseName(enterpriseId.filter((company) => company.default_enterprise)[0].name)
        setLibelleTx(enterpriseId.filter((company) => company.default_enterprise)[0].transactionLibele)
        setAbregedLibelleTx(enterpriseId.filter((company) => company.default_enterprise)[0].abregedLibele)
        setEnterpriseEmail(enterpriseId.filter((company) => company.default_enterprise)[0].email)


    }, [enterpriseId])

    const handlePhoneChange = (e) => {
        setPhone(e)

    }

    const save = (e) => {
        e.preventDefault()
        UpdateEnterprisePublicInfo({
            variables: {
                enterpriseId: enterpriseId.filter((company) => company.default_enterprise)[0]._id,
                name: enterpriseName,
                libelle: libelleTx,
                libelleAbreged: abregedLibelleTx,
                phone: "",
                email: enterpriseEmail
            }
        }).then((success) => {
            setEnterpriseId(success.data.updatePublicInformation)
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
                        <button disabled={!enterpriseName.length || !libelleTx.length || !abregedLibelleTx.length || !enterpriseEmail.length || !usePhone.length || !countryDisplayed.name.length} onClick={save} type="button" className="flex flex-row space-x-4 w-96 mt-7 items-center justify-center text-white bg-black  font-medium text-sm px-6 py-3  focus:outline-none outline-none disabled:bg-opacity-40">
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



export default PublicInfoMenuEdit
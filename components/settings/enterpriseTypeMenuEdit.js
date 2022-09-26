import React, {useContext, useEffect, useState} from 'react'
import EnterpriseType from '../enterprise/enterpriseType';
import { ArrowRightIcon } from '@heroicons/react/solid'
import CountryPicker from '../countries/CountrySelect';
import data from '../../utils/countries.json';
import { useMutation } from '@apollo/client';
import { useNotification } from '../../notifications/NotificationContext';
import { UPDATE_ENTERPRISE_TYPE_INFORMATION } from '../../mutation/settings/updateEntrepriseType';
import { Transition } from '@headlessui/react';
import LoadingIcon from '../icons/LoadingIcon';
import { EnterpriseContext } from '../../context/EnterpriseContext';

const _types_enterprise = [
    { name: 'Entreprise', enum: "COMPANY"},
    { name: 'Entreprise individuelle', enum: "INDIVIDUAL"},
    { name: 'ONG', enum: "ONG"},
] 

const EnterpriseTypeMenuEdit = () => {
    const [countryDisplayed, setCountryDisplayed] = useState(data[0]);
    const {enterpriseId, setEnterpriseId} = useContext(EnterpriseContext)
    const [selectedEnterpriseType, setSelectedEnterpriseType] = useState(_types_enterprise[0]);
    const dispatch = useNotification()
    const [UpdateEnterpriseTypeInfo, { loading }] = useMutation(UPDATE_ENTERPRISE_TYPE_INFORMATION)


    useEffect(() => {
        if(!enterpriseId.length) return;
        setSelectedEnterpriseType(_types_enterprise.filter((type) => type.enum == enterpriseId.filter((company) => company.default_enterprise)[0].type)[0])
        setCountryDisplayed(data.filter((country) => country.code == enterpriseId.filter((company) => company.default_enterprise)[0].country)[0])
    }, [enterpriseId])

    const save = (e) => {
        e.preventDefault()
        UpdateEnterpriseTypeInfo({
            variables: {
                enterpriseId: enterpriseId.filter((company) => company.default_enterprise)[0]._id,
                type: selectedEnterpriseType.enum,
                country: countryDisplayed.code
            }
        }).then((result) => {
            setEnterpriseId(result.data.updateEnterpriseType)
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
            <div className='flex text-2xl justify-start'>Commençons par quelques informations de base</div>
            <div className='flex text-sm text-gray-600 justify-start'>Pour commencer, veuillez indiquer votre pays et votre type d'entreprise</div>
            <CountryPicker data={data} countryDisplayed={countryDisplayed} setCountryDisplayed={setCountryDisplayed}></CountryPicker>
            <EnterpriseType enterprisesTypes={_types_enterprise} selected={selectedEnterpriseType} setSelected={setSelectedEnterpriseType}></EnterpriseType>
            <div className='flex items-center justify-center'>
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
    )
}



export default EnterpriseTypeMenuEdit
import React, {useEffect, useState} from 'react'
import EnterpriseType from './enterpriseType'
import { ArrowRightIcon } from '@heroicons/react/solid'
import CountryPicker from '../countries/CountrySelect'
import data from '../../utils/countries.json';

const _types_enterprise = [
    { name: 'Entreprise', enum: "COMPANY"},
    { name: 'Entreprise individuelle', enum: "INDIVIDUAL"},
    { name: 'ONG', enum: "ONG"},
] 

const EnterpriseTypeMenu = ({onClick}) => {
    const [countryDisplayed, setCountryDisplayed] = useState(()=> {
       const saved = JSON.parse(localStorage.getItem("_countryDisplayed"))
       return saved || data[0]
    });

    const [selectedEnterpriseType, setSelectedEnterpriseType] = useState(() => {
        const saved = JSON.parse(localStorage.getItem("_selectedEnterpriseType"))
        return saved || _types_enterprise[0]
    });


    useEffect(() => {
        localStorage.setItem("_countryDisplayed", JSON.stringify(countryDisplayed))
        localStorage.setItem("countryDisplayed", countryDisplayed.code)
    }, [countryDisplayed])

    useEffect(() => {
        localStorage.setItem("_selectedEnterpriseType", JSON.stringify(selectedEnterpriseType))
        localStorage.setItem("selectedEnterpriseType", selectedEnterpriseType.enum)
    }, [selectedEnterpriseType])

    return (
        <div className='flex flex-col items-center justify-center w-96' id='enterpriseTypeMenuPage'>
            <div className='flex text-2xl justify-start'>Commençons par quelques informations de base</div>
            <div className='flex text-sm text-gray-600 justify-start'>Pour commencer, veuillez indiquer votre pays et votre type d'entreprise</div>
            <CountryPicker data={data} countryDisplayed={countryDisplayed} setCountryDisplayed={setCountryDisplayed}></CountryPicker>
            <EnterpriseType enterprisesTypes={_types_enterprise} selected={selectedEnterpriseType} setSelected={setSelectedEnterpriseType}></EnterpriseType>
            <div className='flex items-center justify-center'>
            <button id='enterpriseTypeButtonValidate' onClick={onClick} type="button" className="flex flex-row space-x-4 w-96 mt-7 items-center justify-center text-white bg-black  font-medium text-sm px-6 py-3  focus:outline-none outline-none">
                <span>Continuer</span>
                <ArrowRightIcon className='h-4 w-4 text-white'></ArrowRightIcon>
            </button>
            </div>
        </div>
    )
}



export default EnterpriseTypeMenu
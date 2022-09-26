


import { useState } from 'react'
import { Tab } from '@headlessui/react'
import EnterpriseTypeMenuEdit from './enterpriseTypeMenuEdit'
import { TrashIcon } from '@heroicons/react/outline'
import PersonalInfoMenuEdit from './personnalInfoEdit'
import EnterpriseInfoMenuEdit from './EnterpriseInnfoEdit'
import ExecutionInfoMenuEdit from './ExecutionInfoEdit'
import PublicInfoMenuEdit from './publicInformationEdit'
import DeleteEnterpriseButton from './buttons/DeleteEnterperiseButton'


const EnterpriseSettingsTab = () => {
  const [index, setSelectedIndex] = useState(0)

  return (
    <div className="w-full  mt-10">
      <Tab.Group defaultIndex={1} selectedIndex={index} onChange={setSelectedIndex} as="div">
        <div className='flex flex-row justify-between border-b border-gray-400 items-center py-2'>
          <Tab.List id='dsds' className="flex space-x-1 bg-gray-100 rounded-lg" >
            <Tab className={`flex ${index == 0 ? 'bg-black text-white' : ""} py-2 px-2 h-auto w-auto outline-none text-sm rounded-tl-lg rounded-bl-lg`}>Type d'entreprise</Tab>
            <Tab className={`flex ${index == 1 ? 'bg-black text-white' : ""} py-2 px-2 h-auto w-auto outline-none text-sm`}>Informations personnelles</Tab>
            <Tab className={`flex ${index == 2 ? 'bg-black text-white' : ""} py-2 px-2 h-auto w-auto outline-none text-sm`}>Informations sur l'entreprise</Tab>
            <Tab className={`flex ${index == 3 ? 'bg-black text-white' : ""} py-2 px-2 h-auto w-auto outline-none text-sm`}>Informations d'exécution</Tab>
            <Tab className={`flex ${index == 4 ? 'bg-black text-white' : ""} py-2 px-2 h-auto w-auto outline-none text-sm rounded-tr-lg rounded-br-lg`}>Informations publiques</Tab>
          </Tab.List>
          <DeleteEnterpriseButton></DeleteEnterpriseButton>
        </div>
        <Tab.Panels className="mt-8">
          <Tab.Panel className="flex items-center justify-center">
            <EnterpriseTypeMenuEdit></EnterpriseTypeMenuEdit>
          </Tab.Panel>
          <Tab.Panel className="flex items-center justify-center">
            <PersonalInfoMenuEdit></PersonalInfoMenuEdit>
          </Tab.Panel>
          <Tab.Panel className="flex items-center justify-center">
            <EnterpriseInfoMenuEdit></EnterpriseInfoMenuEdit>
          </Tab.Panel>
          <Tab.Panel className="flex items-center justify-center">
            <ExecutionInfoMenuEdit></ExecutionInfoMenuEdit>
          </Tab.Panel>
          <Tab.Panel className="flex items-center justify-center">
            <PublicInfoMenuEdit></PublicInfoMenuEdit>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}




export default EnterpriseSettingsTab


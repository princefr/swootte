
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import FilterDaysListBox from '../listbox/filtersDayListBox'
import EnterpriseDateRangeSelection from '../enterprise/buttons/selectDate'
import AllPaymentsList from './List/allPaymentslist'
import SuccessPaymentsList from './List/paymentsSuccessList'
import RefundedPaymentsList from './List/refundedPaymentsList'
import NonCapturedPaymentsList from './List/nonCapturedPaymentList'
import FailedPaymentsList from './List/failedPaymentsList'


const PaiementTab = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className="flex  w-full  px-2 mt-10 sm:px-0">
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex} as="div" className={'flex flex-col w-full'}>
        <div className="flex flex-row justify-between border-b border-gray-200 py-2 items-center">
          <Tab.List className="flex space-x-1 bg-gray-100 rounded-lg">
            <Tab className={`flex ${selectedIndex == 0 ? 'bg-black text-white' : ""} py-2 px-2 h-auto w-auto outline-none text-sm rounded-tl-lg rounded-bl-lg`}>Tout</Tab>
            <Tab className={`flex ${selectedIndex == 1 ? 'bg-black text-white' : ""} py-2 px-2 h-auto w-auto outline-none text-sm`}>Reussis</Tab>
            <Tab className={`flex ${selectedIndex == 2 ? 'bg-black text-white' : ""} py-2 px-2 h-auto w-auto outline-none text-sm`}>Remboursés</Tab>
            <Tab className={`flex ${selectedIndex == 3 ? 'bg-black text-white' : ""} py-2 px-2 h-auto w-auto outline-none text-sm`}>Non Capturés</Tab>
            <Tab className={`flex ${selectedIndex == 4 ? 'bg-black text-white' : ""} py-2 px-2 h-auto w-auto outline-none text-sm rounded-tr-lg rounded-br-lg`}>Échecs</Tab>
          </Tab.List>
          <div className="flex flex-row space-x-4 bottom-0">
            <FilterDaysListBox></FilterDaysListBox>
            <EnterpriseDateRangeSelection></EnterpriseDateRangeSelection>
          </div>
        </div>
        <Tab.Panels className="mt-2">
          <Tab.Panel>
            <AllPaymentsList></AllPaymentsList>
          </Tab.Panel>
          <Tab.Panel>
            <SuccessPaymentsList></SuccessPaymentsList>
          </Tab.Panel>
          <Tab.Panel>
            <RefundedPaymentsList></RefundedPaymentsList>
          </Tab.Panel>
          <Tab.Panel>
            <NonCapturedPaymentsList></NonCapturedPaymentsList>
          </Tab.Panel>
          <Tab.Panel>
            <FailedPaymentsList></FailedPaymentsList>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}




export default PaiementTab
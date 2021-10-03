import { useState } from 'react'
import { RadioGroup, Transition } from '@headlessui/react'
import { CheckIcon, ClockIcon, XIcon } from '@heroicons/react/solid'

export function MyRadioGroup() {
  let [plan, setPlan] = useState('startup')

  return (
    <RadioGroup value={plan} onChange={setPlan} className="flex flex-row space-x-3 items-center justify-center px-2">
      <RadioGroup.Label className="text-sm font-light font-montserrat">Status: </RadioGroup.Label>
      <RadioGroup.Option value="tous" className="px-2">
        {({ checked }) => (
          <div className={checked ? 'flex flex-row space-x-2 bg-gray-200 text-gray-700 px-2 py-0.5 shadow-sm ring-1 ring-white rounded-lg' : 'text-sm'}>
                  <span className={checked ? 'font-montserrat text-sm' : 'text-sm'}>Tous</span>
          </div>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="startup" className="px-2">
        {({ checked }) => (
        <div className={checked ? 'flex flex-row space-x-2 bg-green-200 text-green-700 px-2 py-0.5 shadow-sm ring-1 ring-white rounded-lg' : 'text-sm'}>
        <Transition show={checked}>
                    <CheckIcon className='h-5'></CheckIcon>
                </Transition>
                <span className={checked ? 'font-montserrat text-sm' : 'text-sm'}>Terminée</span>
        </div>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="business" className="px-2">
        {({ checked }) => (
                  <div className={checked ? 'flex flex-row space-x-2 bg-yellow-200 text-yellow-700 px-2 py-0.5 shadow-sm ring-1 ring-white rounded-lg' : 'text-sm'}>
                  <Transition show={checked}>
                              <ClockIcon className='h-5'></ClockIcon>
                          </Transition>
                          <span className={checked ? 'font-montserrat text-sm' : 'text-sm'}>En cours</span>
                  </div>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="business2" className="px-2">
        {({ checked }) => (
                  <div className={checked ? 'flex flex-row space-x-2 bg-red-200 text-red-700 px-2 py-0.5 shadow-sm ring-1 ring-white rounded-lg' : 'text-sm'}>
                  <Transition show={checked}>
                              <XIcon className='h-5'></XIcon>
                          </Transition>
                          <span className={checked ? 'font-montserrat text-sm' : 'text-sm'}>Cancelled</span>
                  </div>
        )}
      </RadioGroup.Option>
    </RadioGroup>
  )
}




import { Fragment, useContext, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon, OfficeBuildingIcon, PlusIcon, PlusSmIcon } from '@heroicons/react/outline'
import { useMutation} from '@apollo/client'
import { useRouter } from 'next/router'
import Skeleton from 'react-loading-skeleton';
import { QrCodeContext } from '../../../context/QrCodeContext'
import { CHANGE_CURRENT_ENTERPRISE } from '../../../mutation/enterprise/changeCurrentEnterprise'
import { useNotification } from '../../../notifications/NotificationContext'
import Link from 'next/link'


const ChooseEnterpriseListBox = props => {
    const [loading_, error_, data_, refetch_] = props.enterprises
    const [defaultEnterprise, setDefaultEnterprise] = useState()
    const {qrCode, setQrCode} = useContext(QrCodeContext)
    const router = useRouter()
    const dispatch = useNotification()

    const [ChangeCurrentEnterprise, {loading: loadingChaning}] = useMutation(CHANGE_CURRENT_ENTERPRISE)

    function openModal() {
        router.push("/enterprise/create")
    }


    const updateCurrentEnterprise = (event, enterpriseId) => {
      event.preventDefault()
      ChangeCurrentEnterprise({
        variables: {
          enterpriseId: enterpriseId
        }
      }).then(() => {
        refetch_()
        dispatch({
          payload: {
              type: "SUCCESS",
              title: "ENTERPRISE",
              message: "Nouvelle entreprise selectionnée"
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

    if(loading_) return <Skeleton className="rounded-none"  height={40} width={200} duration={2} />;
    if(!data_) return <Skeleton className="rounded-none"  height={40} width={200} duration={2} />;
    if(data_.getAllUserEnterprise == null) return (
        <div className='relative'>
            <div className="flex items-center justify-center" id="create_enterprise_button">
                <Link href="/enterprise/create">
                <a
                    className="bg-black  px-2 py-2 text-sm font-medium text-white focus:outline-none rounded-xl outline-none flex flex-row items-center justify-center space-x-2">
                     <PlusIcon className='h-4 w-4'></PlusIcon>
                    <span className='text-sm'>Creer une entreprise</span>
                </a>
                </Link>

            </div>

        </div>
    )

    if(!data_.getAllUserEnterprise.length) return (
      <div className='relative'>
          <div className="flex items-center justify-center" id="create_enterprise_button">
              <Link href="/enterprise/create">
              <a
                  className="bg-black  px-2 py-2 text-sm font-medium text-white focus:outline-none rounded-xl outline-none flex flex-row items-center justify-center space-x-2">
                   <PlusIcon className='h-4 w-4'></PlusIcon>
                  <span className='text-sm'>Creer une entreprise</span>
              </a>
              </Link>

          </div>

      </div>
  )







    return (
        <div className="w-48">
        <Listbox value={defaultEnterprise} onChange={setDefaultEnterprise}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full bg-gray-200 bg-opacity-50 cursor-default rounded-lg  py-2 pl-3 pr-10 text-left  focus:outline-none  outline-none sm:text-sm">
              <div className='flex flex-row space-x-4 items-center'>
              <OfficeBuildingIcon className='h-4 w-4'/>
              <span className="block truncate">{data_.getAllUserEnterprise.filter((company) => company.default_enterprise)[0].name}</span>
              </div>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {data_.getAllUserEnterprise.map((enterprise, enterpriseIdx) => (
                  <Listbox.Option
                  onClick={((e) => {
                    updateCurrentEnterprise(e, enterprise._id)
                  })}
                    key={enterpriseIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                      }`
                    }
                    value={enterprise}
                  >
                      <>
                        <span
                          className={`block truncate ${
                            enterprise.default_enterprise ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {enterprise.name}
                        </span>
                        {enterprise.default_enterprise ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>

                  </Listbox.Option>
                ))}

                  <Listbox.Option className="relative cursor-default select-none py-2 pl-10 pr-4" onClick={openModal}>
                        <span className="block truncate">
                          Ajouter une entreprise
                        </span>
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                  </Listbox.Option>
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    )
}

export default ChooseEnterpriseListBox
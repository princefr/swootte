import { Menu, Transition } from '@headlessui/react'
import { Fragment} from 'react'
import { DotsVerticalIcon } from '@heroicons/react/outline'
import RefundMenuItem from './MenuItem/RefundMenuItem'
import CancelMenuItem from './MenuItem/CancelPaymentMenuItem'
import CopyMenuItem from './MenuItem/CopyTxIdMenuItem'


const PaiementItemDropDown = ({transaction}) => {
    return (
        <div>
            <Menu as="div" className="inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md  px-4 py-2 text-sm font-medium  focus:outline-none outline-none">
                        <DotsVerticalIcon
                            className="h-5 w-5 text-violet-200 hover:text-violet-100"
                            aria-hidden="true"
                        />
                    </Menu.Button>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >

                <Menu.Items className="absolute right-0  -translate-x-8 w-56 z-100 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                        {transaction.status == "DONE"? <RefundMenuItem transactionId={transaction._id}></RefundMenuItem> : null}
                        {transaction.status != "DONE"? <CancelMenuItem transactionId={transaction._id}></CancelMenuItem> : null}
                        <CopyMenuItem transactionId={transaction._id}></CopyMenuItem>
                    </div>
                </Menu.Items>



                </Transition>
            </Menu>
        </div>
    )
}



export default PaiementItemDropDown
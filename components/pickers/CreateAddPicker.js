import { Menu, Transition } from "@headlessui/react"
import { PlusIcon} from "@heroicons/react/solid"
import { Fragment} from "react"
import AddTokenButton from "../token/buttons/addTokenButton"
import CreateTokenButton from "../token/buttons/createTokenButton"



const CreateAddPicker = () => {

    return (
        <div className="">
            <Menu  className="relative inline-block text-left">
                <div className="relative mt-1">
                    <div className="space-x-1 flex flex-row items-center px-1">
                        <Menu.Button className="inline-flex justify-center w-full px-2 py-2 text-sm font-medium  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                            <div className="flex truncate flex-row space-x-3 items-center">
                                <PlusIcon className="h-6 w-6 text-gray-500"></PlusIcon>
                            </div>
                        </Menu.Button>
                    </div>

                    <Transition as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >

                        <div className="-translate-x-36 absolute">
                            <Menu.Items  className="absolute w-44 py-1 mt-1  text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                <Menu.Item disabled className="hover:bg-blue-50 px-1">
                                    <CreateTokenButton></CreateTokenButton>
                                </Menu.Item>
                                <Menu.Item className="hover:bg-blue-50 px-1">
                                    <AddTokenButton></AddTokenButton>
                                </Menu.Item>
                            </Menu.Items>
                        </div>
                    </Transition>
                </div>
            </Menu>
        </div>
    )
}


export default CreateAddPicker
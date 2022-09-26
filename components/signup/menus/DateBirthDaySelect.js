
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useContext, useState} from 'react'
import { CalendarIcon } from '@heroicons/react/outline'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { addDays, format} from 'date-fns';
import fr from 'date-fns/locale/fr';

const DateBirthDaySelect = ({selectedDay, setSelectedDay}) => {
    

    

    return (
        <div className="flex w-full">
            <Menu as="div" className="relative text-left flex w-full">
                <div className='flex w-full'>
                    <Menu.Button className="flex w-full cursor-default justify-between  bg-gray-200 py-2 pl-2 pr-2 text-right rounded-lg outline-none   sm:text-sm">
                        {format(selectedDay, 'PPP')}
                        <CalendarIcon
                            className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                            aria-hidden="true"
                        />
                    </Menu.Button>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >

                        <Menu.Items className="absolute mt-2 w-full left-0 z-100 origin-top-right   divide-gray-100 rounded-md bg-white shadow-md focus:outline-none">
                            <div className='shadow-lg absolute bg-white'>
                            <DayPicker
                                mode="single"
                                min={0}
                                numberOfMonths={1}
                                locale={fr}
                                fromYear={1900} toYear={2022} captionLayout="dropdown"
                                selected={selectedDay}
                                onSelect={setSelectedDay}
                            />
                            </div>
                        </Menu.Items>


                    </Transition>
                </div>
            </Menu>
        </div>
    )
} 



export default DateBirthDaySelect
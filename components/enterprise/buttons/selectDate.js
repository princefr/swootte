
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useContext} from 'react'
import { CalendarIcon } from '@heroicons/react/outline'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { addDays, format} from 'date-fns';
import fr from 'date-fns/locale/fr';
import { DateContext } from '../../../context/DateContext';


const EnterpriseDateRangeSelection = () => {
    const pastMonth = new Date();
    const {range, setRange} = useContext(DateContext)

    return (
        <div className="flex">
            <Menu as="div" className="relative text-left">
                <div>
                    <Menu.Button className="flex w-full cursor-default  bg-gray-100 py-2 pl-2 pr-2 text-left rounded-lg outline-none   sm:text-sm">
                        {format(range.from, 'PP')}–{format(range.to, 'PP')}
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

                        <Menu.Items className="absolute mt-2 w-full right-0 z-100 origin-top-right -translate-x-96   divide-gray-100 rounded-md bg-white shadow-md focus:outline-none">
                            <div className='shadow-lg absolute bg-white'>
                            <DayPicker
                                mode="range"
                                min={0}
                                numberOfMonths={2}
                                pagedNavigation
                                defaultMonth={pastMonth}
                                // modifiersClassNames={{
                                //     selected: 'bg-black',
                                //     // today: 'my-today'
                                // }}
                                locale={fr}
                                selected={range}
                                onSelect={setRange}
                            />
                            </div>
                        </Menu.Items>


                    </Transition>
                </div>
            </Menu>
        </div>
    )
}


export default EnterpriseDateRangeSelection
import { Fragment, useContext, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { DateContext } from '../../context/DateContext'
import { addDays, subDays, subMonths, subWeeks, startOfMonth,
   startOfYear, startOfQuarter, differenceInDays, differenceInWeeks, differenceInMonths,
    differenceInQuarters, isSameMonth, isFirstDayOfMonth, isSameQuarter, isSameYear, addHours, isSameDay} from 'date-fns'

const days = [
  { name: "Aujourd'hui", search: "today"},
  { name: '7 derniers jours', search: "last_week" },
  { name: '4 derrieres semaines', search: "last_4_weeks" },
  { name: '3 derniers mois', search: "last_3_monthts" },
  { name: '12 derniers mois', search: "last_12_months" },
  { name: 'Cumul mensuel', search: "cumul_monthly" },
  { name: 'Cumul trimestriel', search: "cumul_quarter"},
  { name: "Cumul annuel", search: "cumul_annualy"},
  { name: 'Tout', search: "all"},
  // { name: 'personnalisée', search: "personalised"},
]

const FilterDaysListBox = () => {
  const pastMonth = new Date()
  const [selected, setSelected] = useState(days[1])
  const {range, setRange} = useContext(DateContext)


  // useEffect(() => {
  //   let timer = setTimeout(() => {
  //     const today = () =>  differenceInDays(range.from, range.to) == 0
  //     if(today()){
  //       return setSelected(days[0])
  //     }else if(differenceInWeeks(range.from, range.to) == -1){
  //       return setSelected(days[1])
  //     }else if(differenceInMonths(range.from, range.to) == -1){
  //       return setSelected(days[2])
  //     }else if(differenceInQuarters(startOfQuarter(range.from), range.to) == -1 && differenceInMonths(range.from, range.to) == -3) {
  //       return setSelected(days[3])
  //     }else if(differenceInMonths(range.from, range.to) == -12){
  //       return setSelected(days[4])
  //     }else if(isFirstDayOfMonth(range.from) && isSameMonth(range.from, range.to) && differenceInDays(range.from, range.to) < 0){
  //       return setSelected(days[5])
  //     }else if(differenceInDays(startOfQuarter(new Date()), range.from) == 0 && isSameQuarter(range.from, range.to) && differenceInQuarters(range.from, range.to) == -1){
  //       return setSelected(days[6])
  //     }else if(differenceInDays(startOfYear(range.from), range.from) == 0 && isSameYear(range.from, range.to) && differenceInQuarters(startOfQuarter(range.from), range.to) != -1){
  //       return setSelected(days[7])
  //     }else if(isSameMonth(new Date(2020, 0, 1), range.from) && isSameDay(new Date(2020, 0, 1), range.from) && isSameYear(new Date(2020, 0, 1), range.from)){
  //       return setSelected(days[8])
  //     }
  //   }, 1000);
  
  //   return () => clearTimeout(timer)
  // }, [range])


  useEffect(() => {
    switch (selected.search) {
      case "today":
        setRange({ from: pastMonth, to: addDays(pastMonth, 1) })
        break;
      case "last_week":
        setRange({from: subDays(pastMonth, 7), to: pastMonth})
        break;
      case "last_4_weeks":
        setRange({from: subWeeks(pastMonth, 4), to: pastMonth})
        break;
      case "last_3_monthts":
        setRange({from: subMonths(pastMonth, 3), to: pastMonth})
        break;
      case "last_12_months":
        setRange({from: subMonths(pastMonth, 12), to: pastMonth})
        break;
      case "cumul_monthly":
        setRange({from: startOfMonth(pastMonth), to: pastMonth})
        break;
      case "cumul_quarter":
        setRange({from: startOfQuarter(pastMonth), to: pastMonth})
        break;
      case "cumul_annualy":
        setRange({from: startOfYear(pastMonth), to: pastMonth})
        break;
      case "all":
        setRange({from: new Date(2020, 0, 1), to: pastMonth})
        break;
    }
  }, [selected])

  return (
    <div className="w-60">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-default  bg-gray-100 py-2 pl-2 pr-10 text-left  outline-none rounded-lg  sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
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
            <Listbox.Options className="absolute z-100 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {days.map((day, dayIdx) => (
                <Listbox.Option
                  key={dayIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={day}
                >
                  {({ _selected }) => (
                    <>
                      <span
                        className={`block truncate ${_selected ? 'font-medium' : 'font-normal'
                          }`}
                      >
                        {day.name}
                      </span>
                      {_selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default FilterDaysListBox
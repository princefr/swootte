import { Switch } from '@headlessui/react'






function Toogle({enabled, setEnabled }) {
    

    return (

        <div className="py-1">
            <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? 'bg-green-300' : 'bg-gray-300'}
          relative inline-flex flex-shrink-0 h-[24px] w-[54px] border-2 border-transparent items-center rounded-lg px-1 cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
                <span className="sr-only">Use setting</span>
                <span
                    aria-hidden="true"
                    className={`${enabled ? 'translate-x-7' : 'translate-x-0'}
            pointer-events-none inline-block h-[16px] w-[16px] rounded-full items-center bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
                />
            </Switch>
        </div>



    )
}


export default Toogle
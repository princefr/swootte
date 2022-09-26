import { useContext, useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'
import Skeleton from 'react-loading-skeleton';
import { ModeContext } from '../../context/ModeContext';

const TestModeSwitch = props => {
  const [loading, error, data, refetch] = props.useUser
  const {LiveMode, setLiveMode} = useContext(ModeContext)


  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(LiveMode))
  }, [LiveMode])

  if (loading) return <Skeleton circle={false} height={30} width={96} duration={2} />;
  if (!data) return null



  
  

  return (
    <Switch.Group>
        <div className="flex py-16 space-x-4 items-center justify-center">
        <Switch.Label className={"flex flex-row space-x-2 items-center justify-center"}>
            <div className={`h-3 w-3 rounded-full ${LiveMode ? "bg-green-500" : "bg-yellow-500"}`} />
            <div className={"text-xs"}>{LiveMode ? "Livemode" : "Testmode"}</div>
        </Switch.Label>
      <Switch
        checked={LiveMode}
        onChange={setLiveMode}
        className={`${LiveMode ? 'bg-black' : 'bg-gray-400'}
          relative inline-flex h-[24px] w-[56px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${LiveMode ? 'translate-x-8' : 'translate-x-0'}
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
    </Switch.Group>
  )
}

export default TestModeSwitch
import { useEffect, useState } from "react";


const Notification = (props) => {
    const [exit, setExit] = useState(false)
    const [width, setWidth] = useState(0)
    const [intervalId, setIntervalId] = useState()

    const HandleStartTimer = () => {
        const id = setInterval(() => {
            setWidth((prev) => {
                if (prev < 100) return prev + 0.5
                return prev
            })
        }, 20)
        setIntervalId(id)
    }



    const handleCloseNotification = () => {
        setExit(true)
        setTimeout(() => {
            props.dispatch({
                type:"REMOVE_NOTIFICATION",
                id: props.id
            })
        }, 400)
    }


    const handleCloseClicked = (event) => {
        event.preventDefault()
        setExit(true)
        setTimeout(() => {
            props.dispatch({
                type:"REMOVE_NOTIFICATION",
                id: props.id
            })
        }, 400)
    }


    useEffect(() => {
        if(width == 100) handleCloseNotification()
    }, [width])


    const handlePauseTimer = () => {
        clearInterval(intervalId)
    }

    useEffect(() => {
        HandleStartTimer()
    }, [])



    return (
        
        <div onMouseEnter={handlePauseTimer} onMouseLeave={HandleStartTimer}  className={`${exit == false? "animate-slideleft" : "animate-slideright"} flex-col flex-wrap justify-between shadow-lg  rounded-xl  w-full bg-white z-50`}>
            <div className="flex flex-row w-full items-start justify-between px-4 pt-5 pb-4">
            {(() => {
                    switch(props.payload.type){
                        case "ERROR":
                            return <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                            <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                            
                        case "WARNING":
                            return <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                        </div>
                        case "SUCCESS":
                            return <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                    }
                })()}
                <div className="flex flex-col mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                        {props.payload.title}
                    </h3>
                    <div className="mt-2">
                        <p className="text-sm text-gray-500">
                            {props.payload.message}
              </p>
                    </div>
                </div>

                <button onClick={handleCloseClicked} className="mx-auto flex-shrink-0 flex items-center focus:outline-none">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
            <div className="px-2 py-1">
                {(() => {
                    switch(props.payload.type){
                        case "SUCCESS":
                            return <div className={`h-1 bg-green-600 bottom-0 px-2`} style={{ width: `${width}%` }}></div>
                        case "WARNING":
                            return <div className={`h-1 bg-blue-600 bottom-0 px-2`} style={{ width: `${width}%` }}></div>
                        case "ERROR":
                            return <div className={`h-1 bg-red-600 bottom-0 px-2`} style={{ width: `${width}%` }}></div>
                    }
                })()}
            </div>
        </div>
    )
}

export default Notification
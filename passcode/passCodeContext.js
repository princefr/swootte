import { createContext, useContext, useReducer } from "react"
import uuid from "react-uuid";
import PinCodeModal from "../components/pincode/pincodeModal";




const PassCodeContext = createContext();

export const usePasscode = () => {
    const passcode = useContext(PassCodeContext)
    return (props) => {
        passcode({
            type: "OPEN",
            payload: {
                id: uuid(),
                ...props
            }
        })
    }
}


const PinCodeProvider = (props) => {
    const [state, passcode] = useReducer((state, action) => {
        switch(action.type){
            case "OPEN":
                return [...state, {...action.payload}];
            case "CLOSE":
                return state.filter(el => el.id !== action.id);
            default:
                return state 

        }
    },[])

    

    return (
        <PassCodeContext.Provider value={passcode}>
            <div className="notification-wrapper  fixed w-96 z-50  top-0 right-0 m-5">
                {
                    state.map(note => {
                        return <PinCodeModal passcode={passcode}  key={note.id} {...note}/>
                    }) 
                }
            </div>
            {props.children}
        </PassCodeContext.Provider>
    )

}


export default PinCodeProvider




import { createContext, useContext, useReducer } from "react"
import uuid from "react-uuid";
import Notification from "./notification"



const NotificationContext = createContext();

export const useNotification = () => {
    const dispatch = useContext(NotificationContext)
    return (props) => {
        dispatch({
            type: "ADD_NOTIFICATION",
            payload: {
                id: uuid(),
                ...props
            }
        })
    }
}


const NotificationProvider = (props) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type){
            case "ADD_NOTIFICATION":
                return [...state, {...action.payload}];
            case "REMOVE_NOTIFICATION":
                return state.filter(el => el.id !== action.id);
            default:
                return state 

        }
    },[])

    return (
        <NotificationContext.Provider value={dispatch}>
            <div className="notification-wrapper  fixed w-96 z-50  top-0 right-0 m-5">
                {
                    state.map(note => {
                        return <Notification dispatch= {dispatch}  key={note.id} {...note}/>
                    }) 
                }
            </div>
            {props.children}
        </NotificationContext.Provider>
    )

}


export default NotificationProvider
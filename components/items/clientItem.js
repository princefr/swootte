
import { useQuery } from "@apollo/client"
import { useContext } from "react"
import { DeviseContext } from "../../context/DeviseContext"
import { FirebaseUIDContext } from "../../context/FirebaseUIDContext"
import { GET_CLIENTS } from "../../queries/getClients"





function ClientItem({client}) {
    const { firebaseUID, }  = useContext(FirebaseUIDContext)
    const {Devise, } = useContext(DeviseContext)
    const {loading, error, data, refetch} = useQuery(GET_CLIENTS, {
        variables: {
            firebase_uid : firebaseUID,
            token: Devise
        }
    })

    if (loading) return <p>Loading ...</p>;
    if (error) return `Error! ${error}`;

    return (
        <div></div>
    )
}



export default ClientItem
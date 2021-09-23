import { useQuery } from "@apollo/client"
import { useContext } from "react"
import { DeviseContext } from "../../context/DeviseContext"
import { FirebaseUIDContext } from "../../context/FirebaseUIDContext"
import { GET_ACTIVITIES } from "../../queries/getActivities"



function ActivityItem({activity}) {
    const { firebaseUID, }  = useContext(FirebaseUIDContext)
    const {Devise, } = useContext(DeviseContext)
    const {loading, error, data, refetch} = useQuery(GET_ACTIVITIES, {
        variables: {
            firebase_uid : firebaseUID,
            token: Devise.publicKey
        }
    })

    if (loading) return <p>Loading ...</p>;
    if (error) return `Error! ${error}`;
    
    return (
        <div>


        </div>
    )
}



export default ActivityItem
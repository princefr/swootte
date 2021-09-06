import gql from "graphql-tag";



export const TOOGLE_ONLINE = gql`
    mutation ToogleOnline($firebaseUid: String!, $isOnline: Boolean){
        toogleOnline(firebaseUid: $firebaseUid, isOnline: $isOnline)
    }
`
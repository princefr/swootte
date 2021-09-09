import gql from "graphql-tag";




export const CREATE_NEW_TOKEN = gql`
mutation CreateNewToken($firebase_uid: String!, $name: String!, $tick: String!, $decimals: Int, $mintAuthority: String, $freezeAuthority: String) {
        createNewToken(firebase_uid: $firebase_uid, name: $name, tick: $tick, decimals: $decimals, mintAuthority: $mintAuthority, freezeAuthority: $freezeAuthority)
    }
`
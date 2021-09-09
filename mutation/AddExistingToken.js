import gql from "graphql-tag";




export const ADD_EXISTING_TOKEN = gql`
mutation AddExistingToken($firebase_uid: String!, $token_adress: String!) {
        addExistingToken(firebase_uid: $firebase_uid, token_adress: $token_adress)
    }
`
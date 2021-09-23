import gql from "graphql-tag";




export const CREATE_NEW_TOKEN = gql`
mutation CreateNewToken($token: TokenInput!) {
        createToken(token: $token)
    }
`
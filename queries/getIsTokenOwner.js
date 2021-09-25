import gql from "graphql-tag";



export const GET_IS_TOKEN_OWNER = gql`
query GetIsTokenOwner($token: String!){
    getIsTokenOwner(token: $token)
        }

`
import gql from "graphql-tag";



export const GET_QR_CODE = gql`
query LoadQRCode($token: String!) {
    loadQRCode(token: $token)
        }

`
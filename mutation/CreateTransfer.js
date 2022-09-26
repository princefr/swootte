import gql from "graphql-tag";




export const CREATE_TRANSFER = gql`
mutation TransferMoneyEnterprise($enterpriseId: String!, $pinCode: String!, $publicKey: String!, $amount: Float!) {
    transferMoneyEnterprise(enterpriseId: $enterpriseId, pinCode: $pinCode, publicKey: $publicKey, amount: $amount)
        }
`
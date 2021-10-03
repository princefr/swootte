import gql from "graphql-tag";




export const CREATE_DEPOSIT = gql`
mutation AddDeposit($topup: TopUpInput!) {
            addTopUp(topup: $topup)
        }
`
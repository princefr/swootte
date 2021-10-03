import gql from "graphql-tag";




export const CREATE_WITHDRAW = gql`
mutation AddWithDraw($withdraw: WithdrawInput!) {
        addWithDraw(withdraw: $withdraw)
    }
`
import gql from "graphql-tag";




export const REFUND_PAYMENT = gql`
mutation AddAgency($agency: AgencyInpyt!) {
        addAGency(agency: $agency)
    }
`
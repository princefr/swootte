import gql from "graphql-tag";




export const ADD_AGENCY = gql`
mutation AddAgency($agency: AgencyInpyt!) {
        addAGency(agency: $agency)
    }
`
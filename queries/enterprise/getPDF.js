import gql from "graphql-tag";


export const GET_PAYMENT_PDF = gql`
    query GetPdf ($enterpriseId: String!) {
        getPdf(enterpriseId: $enterpriseId)

    }

`
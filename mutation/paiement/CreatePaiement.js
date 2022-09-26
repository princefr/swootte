







import gql from "graphql-tag";




export const CREATE_PAIEMENT = gql`
mutation CreatePaiementOnTopOfEnterprise($enterpriseId: String!, $amount: String!) {
    createPaiementOnTopOfEnterprise(enterpriseId: $enterpriseId, amount: $amount) {
        _id
        status
        type
        token
        amount
      }
    }
`
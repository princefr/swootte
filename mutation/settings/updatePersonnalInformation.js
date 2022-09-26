import gql from "graphql-tag";



export const UPDATE_PERSONNAL_INFORMATIONS = gql`
mutation UpdatePersonnalInformation($enterpriseId: String!, $first_name: String!, $last_name: String!, $email: String!, $address: String!, $city: String!, $state: String!, $zip: String!) {
    updatePersonnalInformation(enterpriseId: $enterpriseId, first_name: $first_name, last_name: $last_name, email: $email, address: $address, city: $city, state: $state, zip: $zip){
        _id
            name
            type
            logoUrl
            publishableKey
            private_key
            walletPublicKey
            default_enterprise
            country
            description
            sellingPhysicalGoods
            selfShippingProduct
            shippingDelay
            transactionLibele
            abregedLibele
            phone
            email
            sector
            rccm
            website
            person {
                first_name
                last_name
                email
                address
                state
                city
                zip
            }
            }
        }

`
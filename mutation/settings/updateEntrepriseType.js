import gql from "graphql-tag";



export const UPDATE_ENTERPRISE_TYPE_INFORMATION = gql`
mutation UpdateEnterpriseType($enterpriseId: String!, $type: String!, $country: String!) {
    updateEnterpriseType(enterpriseId: $enterpriseId, type: $type, country: $country){
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
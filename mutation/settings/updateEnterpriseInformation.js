import gql from "graphql-tag";



export const UPDATE_ENTERPRISE_INFORMATION = gql`
mutation UpdateEnterpriseInformation($enterpriseId: String!, $rccm: String!, $sector: String!, $website: String, $description: String) {
    updateEnterpriseInformation(enterpriseId: $enterpriseId, rccm: $rccm, sector: $sector, website: $website, description: $description){
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
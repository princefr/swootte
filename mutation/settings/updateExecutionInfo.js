import gql from "graphql-tag";



export const UPDATE_EXECUTION_INFORMATION = gql`
mutation UpdateExecutionInformation($enterpriseId: String!, $sellingPyshicalGoods: Boolean, $selfShipping: Boolean, $shippingDelay: String) {
    updateExecutionInformation(enterpriseId: $enterpriseId, sellingPyshicalGoods: $sellingPyshicalGoods, selfShipping: $selfShipping, shippingDelay: $shippingDelay){
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
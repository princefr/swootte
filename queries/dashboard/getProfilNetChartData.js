import gql from "graphql-tag";


export const GET_PROFIT_NET_CHART_DATA = gql`
    query GetProfilNetChartData($enterpriseId: String!, $from: String!, $to: String!) {
        getProfilNetChartData(enterpriseId: $enterpriseId, from: $from, to: $to){
            currentTotal
            formerTotal
            pourcentageDifference
            isPositive
            chart
        }

    }

`
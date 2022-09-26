import gql from "graphql-tag";


export const GET_PROFIT_BRUT_CHART_DATA = gql`
    query GetProfilBrutChartData($enterpriseId: String!, $from: String!, $to: String!) {
        getProfilBrutChartData(enterpriseId: $enterpriseId, from: $from, to: $to){
            currentTotal
            formerTotal
            pourcentageDifference
            isPositive
            chart
        }

    }

`
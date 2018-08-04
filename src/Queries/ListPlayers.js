import graphql from 'graphql-tag'

export default graphql`
    query LIST_PLAYERS {
        listPlayers {
            items{
                firstName
                lastName
                position
                gradClass
                maxBench
                maxSquat
                id
            }
        }
    }
`
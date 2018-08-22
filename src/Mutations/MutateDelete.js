import gql from 'graphql-tag'


export default gql`
    mutation deletePlayer ($id: ID!){
        deletePlayer(input: {
            id: $id}){
            id
        }
    }
`
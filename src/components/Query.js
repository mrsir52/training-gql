import gql from "graphql-tag";
import { Query } from "react-apollo";
import LIST_PLAYERS from '../Queries/ListPlayers'

const Players = () => (
    <Query query={LIST_PLAYERS}>
        {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;

            return (

                <div>
                    from query
                </div>

            );
        }}
    </Query>
);
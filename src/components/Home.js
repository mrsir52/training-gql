import React, {Component, Fragment} from 'react'
import { graphql } from 'react-apollo'
import ListPlayers from '../Queries/ListPlayers'

class Home extends Component {

    state = {
        players: [...this.props.players]
    }

    render() {
    console.log("state.players:", this.state.players)
        return (
            <Fragment>
                <h1>
                    from home
                </h1>
                    {this.state.players.map((player, index) => (
                            <tr key={player.id}>
                                <td>{player.firstName}</td>
                                <td>{player.lastName}</td>
                                <td>{player.position}</td>
                                <td>{player.gradClass}</td>
                                <td>{player.maxSquat}</td>
                                <td>{player.maxBench}</td>
                            </tr>
                        )
                    )
                    }
            </Fragment>
        )
    }
}

export default graphql(ListPlayers, {
        options: {
            fetchPolicy: 'cache-and-network'
        },
        props: props => ({
            players: props.data.listPlayers ? props.data.listPlayers.items : []
        })
    }
)(Home)
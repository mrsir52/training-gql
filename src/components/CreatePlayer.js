import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import MutatePlayer from '../Mutations/MutatePlayer'
import { Card, CardBody, Input, Button} from 'mdbreact'
import ListPlayers from '../Queries/ListPlayers'
import uuidV4 from 'uuid'


class CreatePlayer extends Component {


    componentDidMount() {

}

    state = {
        firstName: '',
        lastName: '',
        position: '',
        maxBench: '',
        maxSquat: '',
        gradClass: ''
    }


    onAdd = () => {
        this.props.mutate({
            variables: {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                position: this.state.position,
                gradClass: this.state.gradClass,
                maxBench: this.state.maxBench,
                maxSquat: this.state.maxSquat,
                id: uuidV4
            }
        })

    }

    render() {
    console.log("look here:", this.state)

        return (
            <div className="container">

                <section className="">
                    <div className="row">

                        <div className="col-lg-3"></div>
                        <div className="col-lg-5">
                            <br/>
                            <form onSubmit={ async e => {
                                e.preventDefault()
                                const response = await this.props.mutate({
                                    variables: {
                                        firstName: this.state.firstName,
                                        lastName: this.state.lastName,
                                        position: this.state.position,
                                        gradClass: this.state.gradClass,
                                        maxBench: this.state.maxBench,
                                        maxSquat: this.state.maxSquat,
                                        id: uuidV4()
                                    },
                                    refetchQueries: [{ query: ListPlayers }]
                                }).then( () => window.location.replace('/'))

                                // alert('Player Created')
                                // window.location.replace('/Teamdata')
                            }}>
                                <h1>Create Player</h1>
                                <Card>

                                    <CardBody>
                                        <Input
                                            type="text"
                                            label="First Name"
                                            value={this.state.firstName}
                                            onChange={e => this.setState({firstName: e.target.value})}
                                        />
                                        <Input
                                            type="text"
                                            label="Last Name"
                                            value={this.state.lastName}
                                            onChange={e => this.setState({lastName: e.target.value})}
                                        />
                                        <Input
                                            type="text"
                                            label="Position"
                                            value={this.state.position}
                                            onChange={e => this.setState({position: e.target.value})}
                                        />
                                        <Input
                                            type="text"
                                            label="Class Of"
                                            value={this.state.gradClass}
                                            onChange={e => this.setState({gradClass: e.target.value})}
                                        />
                                        <Input
                                            type="number"
                                            label="Max Bench"
                                            value={this.state.maxBench}
                                            onChange={e => this.setState({maxBench: e.target.value})}
                                        />
                                        <Input
                                            type="number"
                                            label="Max Squat"
                                            value={this.state.maxSquat}
                                            onChange={e => this.setState({maxSquat: e.target.value})}
                                        />

                                        <button color='primary' type="submit">Add</button>
                                    </CardBody>
                                </Card>
                            </form>


                        </div>

                    </div>

                </section>
            </div>
        )

    }

}

export default graphql(MutatePlayer)(CreatePlayer)
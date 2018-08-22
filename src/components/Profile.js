import React, { Component } from 'react';
import { Button, Card, CardBody} from 'mdbreact';
// import { Panel, ControlLabel, Glyphicon } from 'react-bootstrap';
import CalendarHeatmap from 'react-calendar-heatmap';
import graphql from 'react-apollo'
// import './Profile.css';
// import './style.css'
import Findplayer from "../Queries/FindPlayer";

// const fetchPlayer = () => {
//     graphql(Findplayer, {
//         options: props => {return { variables: { profile } }}
//     })(Profile)
//         }


class Profile extends Component {


    // componentWillMount()
    // {
    //     this.setState({ profile: {} });
    //     const { userProfile, getProfile } = this.props.auth;
    //     if (!userProfile) {
    //         getProfile((err, profile) => {
    //             this.setState({ profile });
    //             console.log(this.state)
    //         });
    //     } else {
    //         this.setState({ profile: userProfile });
    //     }
    // }

    render() {
        // const { profile } = this.state;
        // console.log("GQL:", this.props.players)
        // console.log("render", profile)


        return (
            <div className="intro">
                <div className="container text-center">
                    <Card className="heatmap-class">
                        {/*{profile.given_name}*/}
                        <h2>Welcome Name </h2>
                        <h4>Days with workouts or practice</h4>
                        <CalendarHeatmap
                            startDate={new Date('2018-01-01')}
                            endDate={new Date('2018-04-17')}
                            values={[
                                { date: '2018-01-01' },
                                { date: '2018-01-22' },
                                { date: '2018-02-25' },
                                { date: '2018-03-01' },
                                { date: '2018-03-22' },
                                { date: '2018-03-24' },
                                { date: '2018-04-02' },
                                { date: '2018-04-03' },
                                { date: '2018-04-04' },
                                { date: '2018-04-05' },
                                { date: '2018-04-10' },
                                { date: '2018-04-11' },
                                { date: '2018-04-12' },
                                { date: '2018-04-13' },
                                { date: '2018-04-15' },
                                { date: '2018-04-16' },
                                { date: '2018-04-17' },
                                { date: '2018-04-18' },
                                { date: '2018-04-22' },
                                // ...and so on
                            ]}
                        />
                        <br/>


                    </Card>
                    <br/>
                    <div className="row">
                        <div className="col-lg-3">

                            <br/>
                            {/*<Card>*/}
                            {/*<Calendar/>*/}
                            {/*<br/>*/}


                            {/*</Card>*/}
                            <br/>
                            <Card className="primary-color">
                                <Button color="primary">Email Coach</Button>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>

                            </Card>
                            <br/>
                        </div>
                        <br/>
                        <div className="col-lg-7">
                            <Card>
                                <table className="table">

                                    <thead className="table-active">
                                    <tr>
                                        <th>Exercise</th>
                                        <th>Max</th>
                                        <th>Weight lifted last 30 days</th>
                                        <th>Team Rank</th>
                                        <th>Pos Rank</th>

                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Lift1</td>
                                        <td>l1max</td>
                                        <td>500 lbs</td>
                                        <td>blah</td>
                                        <td>blah</td>
                                    </tr>
                                    <tr>
                                        <td>Lift2</td>
                                        <td>l2max</td>
                                        <td>500 lbs</td>
                                        <td>blah</td>
                                        <td>blah</td>
                                    </tr>
                                    <tr>
                                        <td>Lift3</td>
                                        <td>l3max</td>
                                        <td>500 lbs</td>
                                        <td>blah</td>
                                        <td>blah</td>
                                    </tr>
                                    <tr>
                                        <td>Lift4</td>
                                        <td>l4max</td>
                                        <td>500 lbs</td>
                                        <td>blah</td>
                                        <td>blah</td>
                                    </tr>
                                    <tr>
                                        <td>Lift5</td>
                                        <td>l5max</td>
                                        <td>500 lbs</td>
                                        <td>blah</td>
                                        <td>blah</td>
                                    </tr>
                                    <tr>
                                        <td>Lift6</td>
                                        <td>l6max</td>
                                        <td>500 lbs</td>
                                        <td>blah</td>
                                        <td>blah</td>
                                    </tr>
                                    <tr>
                                        <td>Lift7</td>
                                        <td>l7max</td>
                                        <td>500 lbs</td>
                                        <td>blah</td>
                                        <td>blah</td>
                                    </tr>
                                    <tr>
                                        <td>Lift8</td>
                                        <td>l8max</td>
                                        <td>500 lbs</td>
                                        <td>blah</td>
                                        <td>blah</td>
                                    </tr>
                                    <tr>
                                        <td>Lift9</td>
                                        <td>l9max</td>
                                        <td>500 lbs</td>
                                        <td>blah</td>
                                        <td>blah</td>
                                    </tr>
                                    <tr>
                                        <td>Lift10</td>
                                        <td>l10max</td>
                                        <td>500 lbs</td>
                                        <td>blah</td>
                                        <td>blah</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </Card>
                        </div>
                        <div className="col-lg-2">
                            <Card className="card-center">
                                {/*{profile.given_name} { profile.family_name }*/}
                                <Button size="lg" color="primary">First Name Last Name </Button>
                                <CardBody>
                                    {/*{profile.picture}*/}
                                    <img className="profile-class" src="" alt="profile" />

                                </CardBody>
                            </Card>
                            <br/>
                            <Card>
                                <Button color="warning">
                                    Submit Workout
                                </Button>
                                <br/>
                                <Button color='warning'>
                                    Update Max
                                </Button>
                            </Card>


                        </div>
                    </div>
                </div>
            </div>
        );
    }
    //   return (
    //     <div className="container">
    //       <div className="profile-area">
    //         <h1>Hello {profile.name}!!</h1>
    //         <Panel header="Profile">
    //
    //           <div>
    //             <ControlLabel><Glyphicon glyph="user" /> Nickname</ControlLabel>
    //             <h3>{profile.nickname}</h3>
    //           </div>
    //           <pre>{JSON.stringify(profile, null, 2)}</pre>
    //           <p>{ profile.sub } {profile.given_name} { profile.family_name }</p>
    //         </Panel>
    //       </div>
    //     </div>
    //   );
    // }
}

export default Profile

// graphql(Findplayer, {
//     options: props => {return { variables: { this.props.auth.userProfile.sub } }}
// })(Profile);

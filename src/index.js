import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import {
    NavLink,
    Link,
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import Client from 'aws-appsync';
import config from './appsync'
// import 'bootstrap/dist/css/bootstrap.css';
import { Rehydrated } from 'aws-appsync-react';
import ApolloClient from 'apollo-boost'




import Home from './components/Home'

import 'tachyons'
import './index.css'

const uri = ""
const client = new Client({
    url: config.graphqlEndpoint,
    region: config.region,
    auth: {
        type: config.authenticationType,
        apiKey: config.apiKey
    }
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <Rehydrated>
            <Router>
                <Fragment>
                    <nav className="pa3 pa4-ns">
                        <Link
                            className="link dim black b f6 f5-ns dib mr3"
                            to="/"
                            title="Home"
                        >
                            Home
                        </Link>
                    </nav>
                    <div className="fl w-100 pl4 pr4">
                        <Switch>
                            <Route exact path="/" component={Home} />
                        </Switch>
                    </div>
                </Fragment>
            </Router>
        </Rehydrated>
    </ApolloProvider>,
    document.getElementById('root'),
)

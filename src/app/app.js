import React, { Component } from 'react'
import { connect } from 'react-redux';

import './app.css';
import { Redirect } from 'react-router-dom';
import Routes from '../routes/routes';
import Layout from '../components/layout/layout';

class App extends Component {
    render() {
        console.log(this.props.user);
        if(!this.props.user.isLoggedIn){
            return <Redirect to="/login"/>
        }
        return (
            <Layout className="App">
                <Routes/>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => ({
    user : state.userReducer
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
import React, { Component } from 'react'

import './layout.css';
import Header from '../header/header';
import Sidenav from '../sideNav/sidenav';

class Layout extends Component {

    state = {
        showPanel : true
    }

    togglePanel = () => {
        this.setState({
            showPanel : !this.state.showPanel
        })
    }

    render() {
        return (
            <div className="Layout">
                <div className="l-header">
                    <Header togglePanel={this.togglePanel}/>
                </div>
                <div className="l-main">
                    <div className="l-sidebar" style={this.state.showPanel ? {} : {display : "none"}}>
                        <Sidenav/>
                    </div>
                    <div className="l-content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout

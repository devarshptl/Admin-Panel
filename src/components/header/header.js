import React, { Component } from 'react'
import { withCookies } from 'react-cookie';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import './header.css';
import userAction from '../../actions/user_actions';
import tempUser from '../../temp_user';

class Header extends Component {

    Logout = () => {
        this.props.userAction(tempUser);
        const { cookies } = this.props;
        cookies.remove('_ka_panel');
    }
    render() {
        return (
            <div className="Header bg-light shadow-sm">
                <div className="h-left">
                    <button>
                        <i 
                            className="fas fa-bars text-white" 
                            style={{fontSize : "24px", fontWeight : "200"}}
                            onClick={()=>{this.props.togglePanel()}}
                        /></button>
                    <img
                        src="/images/app_logo.png"
                        className="img-fluid"
                        alt="app-logo"/>
                </div>
                <div className="h-right m-1 mr-lg-4 mr-md-3 mr-sm-2">
                    <img
                        src="/images/user.png"
                        alt="user"/>
                    <button 
                        className="btn btn-info ml-md-2 p-md-2"
                        type="button"
                        onClick={()=>this.Logout()}
                        >Logout</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user : state.userReducer
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        userAction : userAction
    },dispatch)
}

export default withCookies(connect(mapStateToProps, mapDispatchToProps)(Header));
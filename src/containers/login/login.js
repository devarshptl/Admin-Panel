import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import Swal from 'sweetalert2';
import Axios from 'axios';

import './login.css';
import userAction from '../../actions/user_actions';
import { AXIOS_URL } from '../../constants';

class Login extends Component {
 
    state = {
        email : "",
        password : "",
        remember : false
    }

    forgetPassword = () => {
        Swal.fire({
            title: 'Enter Your Email',
            input: 'text',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Send',
            showLoaderOnConfirm: true,
          }).then((login) => {
            Axios.post(`${AXIOS_URL}/admin/forgotPassword`,{
                "email" : login.value
            })
            .then((result) => {
                // console.log(result.data)
                if(result.data.status){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Reset link sent successfull',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
            .catch(err => {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Unable to send request !!',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
          }).catch(err=>console.log(err))
    }

    Login = () => {
        Axios.post(`${AXIOS_URL}/admin/login`,{
            "email" : this.state.email,
            "password" : this.state.password
        })
        .then( (result) => {
            if(result.status){  
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Login Successfull',
                    showConfirmButton: false,
                    timer: 1500
                  })        
                this.props.userAction({...result.data.data, "isLoggedIn" : true});
                if(this.state.remember){
                    const { cookies } = this.props;
                    cookies.set('_ka_panel', result.data, { maxAge : 2*24*60*60});
                }
            }
        })
        .catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Wrong Credentials !!!'
            })
        })
    }
    render() {
        const { cookies } = this.props;
        if(cookies.get('_ka_panel')){
            this.props.userAction({...cookies.get('_ka_panel'), isLoggedIn : true})
        }
        if(this.props.user.isLoggedIn){
            return <Redirect to="/"/>
        }
        return (
            <div className="Login">
                <div className="d-flex flex-column justify-content-center align-items-center l-width">
                    <div>
                        <img 
                            src="/images/app_logo.png" 
                            alt="app logo"
                            className="img-fluid mb-3 igg"/>
                    </div>
                    <div className="bg-light p-4 text-dark rounded l-width">
                        <div className="form-group">
                            <h3 className="text-center" style={{fontFamily : "Open Sans", marginBottom: "26px"}}>Sign In</h3>
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className="form-control mb-3 in-txt"
                                onChange={(e) => this.setState({email : e.target.value})}/>
                            <input
                                type="password"
                                placeholder="Password"
                                className="form-control in-txt"
                                onChange={(e) => this.setState({password : e.target.value})}/>
                        </div>
                        <div className="d-flex justify-content-between align-items-center pt-2 pb-2">
                            <div className="custom-control custom-checkbox">
                                <input
                                    id="remme"
                                    className="custom-control-input"
                                    type="checkbox"
                                    onClick={(e) => this.setState({remember : !this.state.remember})}/>
                                <label className="custom-control-label txt" htmlFor="remme">Remember Me</label>
                            </div>
                            <button 
                                className="text-info txt btn btn-light border border-white"
                                onClick={() => this.forgetPassword()}>Forget Password ?</button>
                        </div>
                        <button 
                            className="btn-block btn btn-primary mt-3 mb-3 p-2"
                            onClick={()=> this.Login()}>Sign In</button>
                        <hr className="bg-light mt-2"/>
                        
                    </div>
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

export default withCookies(connect(mapStateToProps, mapDispatchToProps)(Login));

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Swal from 'sweetalert2';
import Axios from 'axios';

import './admin.css';
import { AXIOS_URL } from '../../constants';

export class Admin extends Component {

    state = {
        "newuser": "",
        "newemail": "",
        "newpassword": "",
        "newpmd" : ""
    }

    updatePass = () => {
        Axios.post(`${AXIOS_URL}/admin/changePassword`, {
            "password" : this.state.newpmd
        })
        .then((result) => {
            if(result.data.status) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Password Updation Successfull',
                    showConfirmButton: false,
                    timer: 1500
                }) 
            }
            else {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Password Updation Failed',
                    showConfirmButton: false,
                    timer: 1500
                }) 
            }
        }) 
        .catch((err) => { 
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Password Updation Failed',
                showConfirmButton: false,
                timer: 1500
            }) 
        })
    }

    addUser = () => {
        Axios.post(`${AXIOS_URL}/admin/add`,{
            "email" : this.state.newemail, 
            "password" : this.state.newpassword, 
            "userName" : this.state.newuser
        })
        .then((result) => {
            if(result.data.status) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Added Admin !!',
                    showConfirmButton: false,
                    timer: 1500
                }) 
            }
            else {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Adding new Admin Failed',
                    showConfirmButton: false,
                    timer: 1500
                }) 
            }
        }) 
        .catch((err) => { 
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Adding new Admin Failed',
                showConfirmButton: false,
                timer: 1500
            }) 
        })
    }

    getAdmin = (data) => (
        data.map((item,key)=>(
            <tr key={key}>
                <th scope="row">{item.id}</th>
                <td>{item.email}</td>
                <td>{item.userName}</td>
                <td>{item.password}</td>
                <td>{item.createdAt}</td>
                <td>{item.updatedAt}</td>
                <td>
                    <div className="d-flex">
                        <i className=""/>
                        <i className=""/>
                    </div>
                </td>
            </tr>
        ))
    )

    render() {

        let tempData = [];
        Axios.get(`${AXIOS_URL}/admin`)
        .then((result) => {
            if(result.data.status){
                tempData = result.data.data
            }
        })
        .catch(err => console.log(err));

        return (
            <div className="Admin bg-white">
                <div className="container mb-3">
                    <div className="row">
                        <div className="col-sm-6">
                            <h5 className="text-secondary">Change Password</h5>
                            <hr></hr>
                            <div class="form-group">
                                <input 
                                    type="password" 
                                    class="form-control mb-2" 
                                    placeholder="New Password"
                                    onChange={(e)=> this.setState({ newpwd : e.target.value})}/>
                            </div>
                            <button
                                type="button"
                                className="btn btn-info mb-2"
                                onClick={() => this.updatePass()}>Update Password</button>
                        </div>
                        <div className="col-sm-6">
                            <h5 className="text-secondary">Add Admin</h5>
                            <hr></hr>
                            <div class="form-group">
                                <input 
                                    type="text" 
                                    class="form-control mb-2" 
                                    placeholder="New Username"
                                    onChange={(e)=> this.setState({ newuser : e.target.value})}/>
                                <input 
                                    type="email" 
                                    class="form-control mb-2" 
                                    placeholder="New Email"
                                    onChange={(e)=> this.setState({ newemail : e.target.value})}/>
                                <input 
                                    type="password" 
                                    class="form-control mb-2" 
                                    placeholder="New Password"
                                    onChange={(e)=> this.setState({ newpassword : e.target.value})}/>
                            </div>
                            <button
                                type="button"
                                className="btn btn-info mb-2"
                                onClick={() => this.addUser()}>Add Admin</button>
                        </div>
                    </div>
                </div>
                <div className="a-table">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#ID</th>
                                <th scope="col">Email</th>
                                <th scope="col">Username</th>
                                <th scope="col">Password</th>
                                <th scope="col">Created At</th>
                                <th scope="col">Updated At</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.getAdmin(tempData)}
                        </tbody>
                        <thead>
                            <tr>
                                <th scope="col">#ID</th>
                                <th scope="col">Email</th>
                                <th scope="col">Username</th>
                                <th scope="col">Password</th>
                                <th scope="col">Created At</th>
                                <th scope="col">Updated At</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)

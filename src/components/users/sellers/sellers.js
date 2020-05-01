import React, { Component } from 'react'
import { connect } from 'react-redux'
import Swal from 'sweetalert2';
import Axios from 'axios';

import './sellers.css';
import userData from '../../../user_data';
import { AXIOS_URL } from '../../../constants';

class Sellers extends Component {

    state = {
        entries : 10,
        filter : "",
        userData : [],
        pagenumber : 0,
        username : "",
        password : "",
        email : "",
        mobilenumber : "",
        firstname : "",
        lastname : ""
    }

    addUser = () => {
        Axios.post(`${AXIOS_URL}/user/register`, {
            "email": this.state.email,
            "password":this.state.password,
            "userName":this.state.username,
            "mobileNumber":this.state.mobilenumber,
            "firstName": this.state.firstname,
            "lastName": this.state.lastname
        })
        .then((result) => {
            // console.log(result.data)
            if(result.data.status){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'New Dealer Added',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
        .catch(err => {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Unable to add new dealer',
                showConfirmButton: false,
                timer: 1500
            })
        })
    }

    getData = (data) => (
        data.map((item,key)=>(
            <tr key={key}>
                <th scope="row">{item.id}</th>
                <td><img src={item.image} alt="user"/></td>
                <td>{item.name}</td>
                <td>{item.contact}</td>
                <td>{item.email}</td>
                <td>{item.civlid}</td>
                <td>{item.totalpost}</td>
                <td>{item.status}</td>
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
        if(this.state.userData.length === 0 && this.state.filter === ""){
            this.setState({
                userData : userData
            })
        }

        let pages = Math.ceil(this.state.userData.length / this.state.entries);
        let arr = [];
        for(let i=1;i<=pages; i++){
            arr.push(i);
        }
        console.log(arr);
        return (
            <div className="Sellers">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="s-h5">Sellers List</h5>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">+ Add Seller</button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">New Seller</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <input type="text" class="form-control mb-2" placeholder="Username" id="example-text-input" onChange={(e)=>{this.setState({ username : e.target.value})}}/>                                    
                                    <input type="password" class="form-control mb-2" placeholder="Password" id="example-text-input" onChange={(e)=>{this.setState({ password : e.target.value})}}/>
                                    <input type="email" class="form-control mb-2" placeholder="Email" id="example-text-input" onChange={(e)=>{this.setState({ email : e.target.value})}}/>                                    
                                    <input type="tel" class="form-control mb-2" placeholder="Mobile Number" id="example-text-input" onChange={(e)=>{this.setState({ mobilenumber : e.target.value})}}/>
                                    <input type="text" class="form-control mb-2" placeholder="Firstname" id="example-text-input" onChange={(e)=>{this.setState({ firstname : e.target.value})}}/>                                    
                                    <input type="text" class="form-control mb-2" placeholder="Lastname" id="example-text-input" onChange={(e)=>{this.setState({ lastname : e.target.value})}}/>                                    
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={()=> this.addUser()}>Add Seller</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sc-flex">
                    <div className="sf-left">
                        <p>Search</p>
                        <select onChange={(e)=>{this.setState({ entries : parseInt(e.target.value) })}}>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="30">30</option>
                        </select>
                        <p>Entries</p>
                    </div>
                    <div className="sf-right">
                        <input
                            type="text"
                            className="sfr-input"
                            placeholder="Search"
                            onChange={(e)=>this.setState({ filter : e.target.value})}/>
                    </div>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Email</th>
                        <th scope="col">Civl ID</th>
                        <th scope="col">Total Post</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getData(this.state.userData)}
                    </tbody>
                    <thead>
                        <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Email</th>
                        <th scope="col">Civl ID</th>
                        <th scope="col">Total Post</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                </table>
                <div className="d-flex justify-content-end">
                    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                        <div className="btn-group mr-2" role="group" aria-label="First group">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Sellers)

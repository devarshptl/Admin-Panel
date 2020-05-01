import React, { Component } from 'react'
import { connect } from 'react-redux'

import './customer.css';
import userData from '../../../user_data';

class Customer extends Component {

    state = {
        entries : 10,
        filter : "",
        userData : [],
        pagenumber : 0
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
            <div className="Customer">
                <h5 className="c-h5">Customer List</h5>
                <div className="c-flex">
                    <div className="cf-left">
                        <p>Search</p>
                        <select onChange={(e)=>{this.setState({ entries : parseInt(e.target.value) })}}>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="30">30</option>
                        </select>
                        <p>Entries</p>
                    </div>
                    <div className="cf-right">
                        <input
                            type="text"
                            className="cfr-input"
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

export default connect(mapStateToProps, mapDispatchToProps)(Customer)

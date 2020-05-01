import React, { Component } from 'react'
import { connect } from 'react-redux'

import './dashboard.css';

const dataCard = [
    {
        "title": "3020 KD",
        "desc": "All Earnings",
        "time": "2:15 am",
        "startcolor": "#fe9365",
        "endcolor": "#feb798"
    },
    {
        "title": "3020 KD",
        "desc": "All Earnings",
        "time": "2:15 am",
        "startcolor": "#0ac282",
        "endcolor": "#0df3a3"
    },
    {
        "title": "3020 KD",
        "desc": "All Earnings",
        "time": "2:15 am",
        "startcolor": "##eb3422",
        "endcolor": "#ef5f51"
    },
    {
        "title": "3020 KD",
        "desc": "All Earnings",
        "time": "2:15 am",
        "startcolor": "#01a9ac",
        "endcolor": "#01dbdf"
    }
]

const getCard = (data) => (
    data.map((item,key)=>(
        <div key={key} className="d-card" style={{ background : `linear-gradient(to right, ${item.startcolor}, ${item.endcolor})`}}>
            <div className="dc-flex-upper">
                <div className="dc-fu-left">
                    <p className="dcfu-title">{item.title}</p>
                    <p className="dcfu-desc">{item.desc}</p>
                </div>
                <div className="dc-fu-right">
                    <p className="dcfu-graph">{item.title}</p>
                </div>
            </div>
            <div className="dc-flex-lower">
                <i className="far fa-clock"/>
                <p className="dcfl-text">update : {item.time}</p>
            </div>
        </div>
    ))
)

class Dashboard extends Component {
    render() {
        return (
            <div  className="Dashboard">
                {getCard(dataCard)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user : state.userReducer
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

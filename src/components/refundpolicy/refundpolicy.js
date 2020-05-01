import React, { Component } from 'react'
import { connect } from 'react-redux'
import SunEditor from 'suneditor-react'

import './refundpolicy.css';

export class RefundPolicy extends Component {

    state = {
        "editorstate" : ""
    }

    handleChange = (event) => {
        this.setState({
            editorstate : event
        })
    }

    render() {
        return (
            <div className="RefundPolicy">
                <h5>Refund Policy</h5>
                <hr></hr>
                <SunEditor onChange={(e) => this.handleChange(e)}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(RefundPolicy)

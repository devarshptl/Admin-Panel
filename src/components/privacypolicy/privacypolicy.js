import React, { Component } from 'react'
import { connect } from 'react-redux'
import SunEditor from 'suneditor-react'

import './privacypolicy.css';

export class PrivacyPolicy extends Component {

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
            <div className="PrivacyPolicy">
                <h5>Privacy Policy</h5>
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

export default connect(mapStateToProps, mapDispatchToProps)(PrivacyPolicy)

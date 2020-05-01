import React, { Component } from 'react'
import { connect } from 'react-redux'
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

import './termsandcondition.css';

class TermsAndCondition extends Component {

    state = {
        "editorstate" : ""
    }

    handleChange = (event) => {
        this.setState({
            editorstate : event
        })
    }

    render() {
        console.log(this.state.editorstate);
        return (
            <div className="TermsAndCondition">
                <h5>Terms and Condititions</h5>
                <hr></hr>
                <SunEditor onChange={(e) => this.handleChange(e)} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(TermsAndCondition)

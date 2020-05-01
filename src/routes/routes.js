import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import Dashboard from '../components/dashboard/dashboard';
import Customer from '../components/users/customers/customer';
import TermsAndCondition from '../components/termsandcondition/termsandcondition';
import { PrivacyPolicy } from '../components/privacypolicy/privacypolicy';
import { RefundPolicy } from '../components/refundpolicy/refundpolicy';
import { Admin } from '../components/admin/admin';
import Dealers from '../components/users/dealers/dealers';
import Sellers from '../components/users/sellers/sellers';

export default class Routes extends Component {
    render() {
        return (
            <div className="Routes">
                <Route path="/" exact component={Dashboard}/>
                <Route path="/customers" exact component={Customer}/>
                <Route path="/sellers" exact component={Sellers}/>
                <Route path="/dealers" exact component={Dealers}/>
                <Route path="/terms_and_conditions" exact component={TermsAndCondition}/>
                <Route path="/privacy_policy" exact component={PrivacyPolicy}/>
                <Route path="/refund_policy" exact component={RefundPolicy}/>   
                <Route path="/admin" exact component={Admin}/>             
            </div>
        )
    }
}
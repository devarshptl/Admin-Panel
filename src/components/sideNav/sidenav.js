import React, { Component } from 'react'

import './sidenav.css';
import { Link } from 'react-router-dom';


class Sidenav extends Component {

    state ={
        navData : [
            {
                "icon" : "far fa-home-lg-alt",
                "text" : "Dashboard",
                "link" : "/",
                "expand" : null,
                "clicked" : true,
                "subnav" : []
            },
            {
                "icon" : "fas fa-users",
                "text" : "Users",
                "link" : "",
                "expand" : false,
                "clicked" : false,
                "subnav" : [
                    {
                        "icon" : "",
                        "text" : "Customers",
                        "link" : "/customers",
                    },
                    {
                        "icon" : "",
                        "text" : "Sellers",
                        "link" : "/sellers",
                    },
                    {
                        "icon" : "",
                        "text" : "Dealers",
                        "link" : "/dealers",
                    }
                ]
            },
            {
                "icon" : "fas fa-mail-bulk",
                "text" : "My Posts/AD",
                "link" : "/mypost",
                "expand" : null,
                "clicked" : false,
                "subnav" : []
            },
            {
                "icon" : "far fa-shopping-cart",
                "text" : "Orders",
                "link" : "",
                "expand" : false,
                "clicked" : false,
                "subnav" : [
                    {
                        "icon" : "",
                        "text" : "Service Request",
                        "link" : "/service_request",
                    },
                    {
                        "icon" : "",
                        "text" : "Orders",
                        "link" : "/orders",
                    }
                ]
            },
            {
                "icon" : "far fa-drone",
                "text" : "Master",
                "link" : "",
                "expand" : false,
                "clicked" : false,
                "subnav" : [
                    {
                        "icon" : "",
                        "text" : "Brand Master",
                        "link" : "/brands",
                    },
                    {
                        "icon" : "",
                        "text" : "Car Type Master",
                        "link" : "/car_types",
                    },
                    {
                        "icon" : "",
                        "text" : "Car Model Master",
                        "link" : "/car_models",
                    },
                    {
                        "icon" : "",
                        "text" : "Car Series Master",
                        "link" : "/car_series",
                    },
                    {
                        "icon" : "",
                        "text" : "Car Year Master",
                        "link" : "/car_year",
                    },
                    {
                        "icon" : "",
                        "text" : "Specification Master",
                        "link" : "/specs",
                    },
                    {
                        "icon" : "",
                        "text" : "Feature Master",
                        "link" : "/features",
                    },
                    {
                        "icon" : "",
                        "text" : "Package Master",
                        "link" : "/package",
                    },
                    {
                        "icon" : "",
                        "text" : "Banner Master",
                        "link" : "/banner",
                    },
                    {
                        "icon" : "",
                        "text" : "Location Master",
                        "link" : "/location",
                    }
                ]
            },
            {
                "icon" : "far fa-drone",
                "text" : "Service",
                "link" : "",
                "expand" : false,
                "clicked" : false,
                "subnav" : [
                    {
                        "icon" : "",
                        "text" : "Service List",
                        "link" : "/service_list",
                    },
                    {
                        "icon" : "",
                        "text" : "Service center",
                        "link" : "/service_center",
                    }
                ]
            },
            {
                "icon" : "fas fa-briefcase",
                "text" : "Parts",
                "link" : "/parts",
                "expand" : null,
                "clicked" : false,
                "subnav" : []
            },
            {
                "icon" : "fas fa-tags",
                "text" : "Popular Tags",
                "link" : "/popular_tags",
                "expand" : null,
                "clicked" : false,
                "subnav" : []
            },            
            {
                "icon" : "fas fa-file-invoice-dollar",
                "text" : "Terms and Conditions",
                "link" : "/terms_and_conditions",
                "expand" : null,
                "clicked" : false,
                "subnav" : []
            },
            {
                "icon" : "fas fa-shield",
                "text" : "Privacy Policy",
                "link" : "/privacy_policy",
                "expand" : null,
                "clicked" : false,
                "subnav" : []
            },
            {
                "icon" : "fas fa-history",
                "text" : "Refund Policy",
                "link" : "/refund_policy",
                "expand" : null,
                "clicked" : false,
                "subnav" : []
            },
            {
                "icon" : "fas fa-key",
                "text" : "Admin",
                "link" : "/admin",
                "expand" : null,
                "clicked" : false,
                "subnav" : []
            },
            {
                "icon" : "fas fa-phone-alt",
                "text" : "Contact Us",
                "link" : "/contact_us",
                "expand" : null,
                "clicked" : false,
                "subnav" : []
            },
        ]
    }

    getNav = (data) => {
        return (
            data.map((item,key)=>{
                let template = null;
                switch (item.expand) {
                    case null:
                        template = (
                            <div key={key} className="null f-m-2" style={item.clicked ? {borderLeft : "3px solid orange", backgroundColor : "#303e57"} : {}}
                                onClick={()=>this.toggleShow(key,data)}>
                                <Link to={item.link} className="text-decoration-none" style={{color : "inherit"}}>
                                    <div className="d-flex align-items-center p-3">
                                        <i className={`${item.icon} hover`} style={{width : "34px", textAlign : "center"}}/>
                                        <span className="nav-head-text" style={{color : "inherit"}}>{item.text}</span>
                                    </div>
                                </Link>
                            </div>
                        )
                        break;
                
                    default:
                        template = (
                            <div key={key} className="null" style={item.clicked ? {borderLeft : "3px solid orange", backgroundColor : "#303e57"} : {}}>
                                <div 
                                    className="d-flex align-items-center justify-content-between p-3 f-m-2"
                                    onClick={()=> this.toggleShow(key,data)}>
                                    <div> 
                                        <i className={`${item.icon} hover`} style={{width : "34px", textAlign : "center"}}/>
                                        <span className="nav-head-text" style={{color : "inherit"}}>{item.text}</span>
                                    </div>
                                    <i className={item.expand ? "far fa-angle-down algin-self-end" : "far fa-angle-right algin-self-end"}/>
                                </div>
                                <ul className="list-group" style={ item.expand ? {} : {display : "none"}}>
                                    {item.subnav.map((subitem,subkey)=> (
                                        <Link key={subkey} to={subitem.link} className="text-decoration-none p-link f-m-1">
                                            <li className="bg-none list-group-item p-2 pl-4"  style={{backgroundColor : "#404e67"}}>
                                                <i className="far fa-angle-right mr-2 ml-1"/>
                                                {subitem.text}
                                            </li>
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        )
                        break;
                }
                return template;
            })
        )
    }

    toggleShow = (key,statedata) => {
        let temp  = statedata;
        for(let i=0;i<temp.length;i++){
            temp[i].clicked = false;
            if(temp[i].expand !== null){
                temp[i].expand = false;
            }
        }

        temp[key].clicked = true;
        if(temp[key].expand !== null){
            temp[key].expand = true;
        }

        this.setState({
            navData : temp
        })
    }

    render() {
        return (
            <div className="Sidenav">
                {this.getNav(this.state.navData)}
            </div>

        )
    }
}

export default Sidenav;
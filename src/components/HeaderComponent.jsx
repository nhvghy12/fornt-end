import React, { Component } from "react";


export  class HeaderComponent extends Component {
    
     
    render(){
        return (<div className="header" style={{ backgroundColor:'#cf2338', padding:'20px'}}>
       <div style={{ float: 'left',align:'center' }}>  {this.props.navname}</div> 
        </div>)
    }

}
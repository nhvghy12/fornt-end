import React, { Component } from "react";
import { Menu } from 'antd';

export class NavBarComponent extends Component {
    render() {
        return (
            <Menu
       
                mode="vertical"
                theme="light"
                defaultSelectedKeys='user'
               
            >
                <Menu.Item key="user" >Manage User</Menu.Item>
                <Menu.Item key="asset">Manage Asset</Menu.Item>
                <Menu.Item key="ast">Manage Assignment</Menu.Item>
                <Menu.Item key="reg">Request for Returning</Menu.Item>
                <Menu.Item key="report">Report</Menu.Item>
              
            </Menu>
            
        )
    }

}


import React from 'react';
import { Sidebar, Segment, Menu, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './style.css';

const LeftSidebar = props => (
<Sidebar.Pushable as={Segment} className="sidebar-container">
    <Sidebar as={Menu} animation="push" width="thin" visible={props.visible} icon="labeled" vertical inverted className="background-blue">
  
    <div>
        <Menu.Item name="dashborad" as={Link} to="/home" className="padding-25">
            <Header as="h4" className="color-white">Home</Header>
        </Menu.Item>
        {props.user.userType === "admin" ? 
        <Menu.Item name="crud" as={Link} to="/tabs" className="padding-25">
        <Header as="h4" className="color-white">Crud</Header>
        </Menu.Item>
        : null }
    </div>
    </Sidebar>
    <Sidebar.Pusher style={{ overflow: 'initial' }}>
      <Segment style={{ width: 'calc(100% - 150px)' }} basic>
        {props.children}
      </Segment>
    </Sidebar.Pusher>
    </Sidebar.Pushable>
);

export default LeftSidebar;
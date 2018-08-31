import React, { Component } from 'react';
import { Menu, Icon, Dropdown} from 'semantic-ui-react';


class Header extends Component {

    render() {

        return (
            <div>
              <Menu fixed='top' inverted style={{"background": "grey"}} size='huge'>
              <Menu.Item onClick={this.props.LeftSidebarStatusFunc}><Icon name="sidebar" />Menu</Menu.Item>
                  <Menu.Menu position='right'>
                    <Dropdown item text={this.props.user.email} >
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={this.props.logout}><Icon name="shutdown"/>Logout</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                </Menu.Menu>
              </Menu>
            </div>
          )
        }
      }

      export default Header;
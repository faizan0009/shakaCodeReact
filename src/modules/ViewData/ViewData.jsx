import React, { Component } from 'react';
import { Table, Container, Button, Modal } from 'semantic-ui-react';
import {fetchUsers, deleteUSER} from './utils';
import Signup from '../Signup';


class ViewData extends Component {
    state = {
        users : [],
        openModal : false,
        editedUser : null,
    }

componentDidMount = () => {
   fetchUsers().then(users => {
    this.setState({users : users});
});
}

editUser = (id) => {
    let filteredUser;
    this.state.users.map(user => {
        if(user.id === id)
        {
          filteredUser = user;
        }
      })
    this.setState({
    openModal : true,
    editedUser : filteredUser
});
}

closeModal = () => {
    fetchUsers().then(users => {
        this.setState({users : users,
        openModal: false});
    });
}

deleteUser = (id) => {
    deleteUSER(id).then(() => {
        fetchUsers().then(users => {
            this.setState({users : users});
        });
    })
}


    render() {
        return (
            <div>
                <Container className="profile-container">
                  <h2>Users</h2>
                <Table celled>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>User Type</Table.HeaderCell>
                        <Table.HeaderCell>Edit</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        
                            {this.state.users ? 
                            this.state.users.map(users => {
                                return(
                                    <Table.Row key={users.id}>
                                        <Table.Cell>{users.email}</Table.Cell>
                                        <Table.Cell>{users.userType}</Table.Cell>
                                        <Table.Cell><Button onClick={() => this.editUser(users.id)}>Edit</Button></Table.Cell>
                                        <Table.Cell><Button onClick={() => this.deleteUser(users.id)}>Delete</Button></Table.Cell>
                                    </Table.Row>
                            )})
                        : null}
                        
                    </Table.Body>
                </Table>

                
                <Modal size={'fullscreen'} closeIcon open={this.state.openModal} onClose={this.closeModal}>
              <Modal.Header>
                Edit User
              </Modal.Header>
                <Modal.Content scrolling>
                  <Signup 
                  edited = {() => {this.closeModal()}}                 
                  user={this.state.editedUser} 
                />
                </Modal.Content>
              </Modal>


                  </Container>
            </div>
        )
    }
  }

  export default ViewData;
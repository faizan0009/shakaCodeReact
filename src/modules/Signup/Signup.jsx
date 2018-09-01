import React, { Component } from 'react';
import { Button, Form, Header, Grid, Segment, Message } from 'semantic-ui-react';
import {editUser} from './utils';

let options = [{key : "1", value : "admin", text : "admin"}, {key : "2", value : "user", text : "user"}]


class Signup extends Component {

  state = {
    email: '',
    password: '',
    userType: ''
  };


  componentDidMount = () => {
    if (this.props.user) {
      this.setState({
        email: this.props.user.email,
        password: this.props.user.password,
        userType: this.props.user.userType,
      
      })
    }
  }
  renderSignupError = () => {
    return (
      <div>
        <Message negative>
          <Message.Header>Invalid username/password. Please try again.</Message.Header>
          <p></p>
        </Message>

      </div>
    );
  }

  handleChange = (e, {name, value}) => {
    this.setState({[name]: value})
  }

  handleSubmit = () => {
    if(this.props.user)
    {
      editUser(this.state.email, this.state.password, this.state.userType, this.props.user.id).then(() => {
        this.props.edited();
      });
    }
    else{
      console.log("in else")
    this.props.signup(this.state.email, this.state.password, this.state.userType);
    }
  }

  render() {
    return (
      <div className="container" >
        <div className="box">
        <Grid
            textAlign="center"
            verticalAlign="middle"
          >
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as="h2" color="teal" textAlign="center">
                ShakaCode
              </Header>
              <Form size="large" onSubmit={this.handleSubmit}>
                <Segment stacked>
            
              

                <Form.Input
                    label="Email"
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="Username"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />


                  <Form.Input
                    label="Password"
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />

                  <Form.Select
                    label="User Type"
                    fluid
                    placeholder="UserType"
                    options={options}
                    name="userType"
                    value={this.state.userType}
                    onChange={this.handleChange}
                  />

                <Button color="teal" fluid size="large">
                {this.props.user ?
                'Edit' : this.props.create?
                'Create': 'Sign Up'
                }
                </Button>
                </Segment>
              </Form>
              {this.props.signupError && this.renderSignupError()}
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}


export default Signup;


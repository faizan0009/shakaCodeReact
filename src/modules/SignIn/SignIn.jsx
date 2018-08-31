import React, { Component } from 'react';
import { Button, Form, Header, Grid, Segment, Message } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class SignIn extends Component {
  state = {

  };

  renderSignInError = () => {
    return (
      <div>
        <Message negative>
          <Message.Header>Invalid username/password. Please try again.</Message.Header>
          <p></p>
        </Message>

      </div>
    );
  }

  Signup = () => {
    this.props.history.push('/sign-up');
  }

  handleChange = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  handleSubmit = () => {
    this.props.login(this.state.username, this.state.password);
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
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="Username"
                    name="username"
                    onChange={this.handleChange}
                  />


                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    name="password"
                    type="password"
                    onChange={this.handleChange}
                  />
                <Button color="teal" fluid size="large">Login</Button>
                </Segment>
              </Form>
              {this.props.loginError && this.renderSignInError()}
              <Button size="tiny" floated="right" color="green" onClick={() => {this.Signup()}} >Signup </Button>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}


export default withRouter(SignIn);


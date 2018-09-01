import React, { Component } from 'react';
import { Redirect, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Signin from './modules/SignIn';
import Signup from './modules/Signup';
import './index.css';
import { connect } from 'react-redux';
import * as actionTypes from "./core/constants/actionTypes";
import App from './App';


const mapStateToProps = (state) => {
  
    const currentUser = state.authentication.user;
  
    return {
      currentUser,
    };
  };
  
const setCurrentUser = () => (dispatch) => {
  let user = JSON.parse(localStorage.getItem("user"))
  dispatch({
    type: actionTypes.SET_CURRENT_USER,
    user: user,
  });
}


  const mapDispatchToProps = dispatch => ({
   setCurrentUser: () => dispatch(setCurrentUser()),  
  });

class Routes extends Component {

  componentDidMount = () => {
    this.props.setCurrentUser();
  }

  render() {
    return(
  <Router>
    <Switch>
      <Route path="/sign-in" component={Signin} />
      <Route path="/sign-up" component={Signup} />

      {this.props.currentUser ? 
        <App user={this.props.currentUser}/>
      
      : <Redirect to="/sign-in" />}
      
      <Route render={() => <p>Not Found</p>} />
    </Switch>
  </Router> 
    )}
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes);

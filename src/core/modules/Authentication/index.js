import * as actionTypes from '../../constants/actionTypes';
import axios from 'axios';
import config from '../../../config';

export const userLogin = (username, password) => (dispatch) => {
  dispatch({ type: actionTypes.AUTH_LOGIN_STARTED });
    axios({
        method: 'post',
        url: `${config.serviceURL}/users/login`,
        data: {
        username: username,
        password: password,
        },
    }).then((user) => {
        dispatch({
            type: actionTypes.AUTH_LOGIN_SUCCESS,
            user: user.data.userInfo,
          });
          localStorage.setItem("user", JSON.stringify(user.data.userInfo));
         window.location.replace('/home');
    })
        .catch((error) => {
        console.error(error);

        dispatch({
            type: actionTypes.AUTH_LOGIN_ERROR,
            error,
          });
        });
};


export const signup = (email, password, userType) => (dispatch) => {
    dispatch({ type: actionTypes.AUTH_SIGNUP_STARTED });
      axios({
          method: 'post',
          url: `${config.serviceURL}/users/signup`,
          data: {
          username: email,
          password: password,
          userType: userType
          },
      }).then((user) => {
          dispatch({
              type: actionTypes.AUTH_SIGNUP_SUCCESS,
              user: user.userInfo,
            });
           window.location.replace('/home');
      })
          .catch((error) => {
          console.error(error);
  
          dispatch({
              type: actionTypes.AUTH_SIGNUP_ERROR,
              error,
            });
          });
  };


export const logout = () => (dispatch) => {
dispatch({ type: actionTypes.AUTH_LOGOUT_STARTED });

    localStorage.removeItem("user");
    window.location.replace('/sign-in');
    dispatch({ type: actionTypes.AUTH_LOGOUT_SUCCESS });
    

};


export default { userLogin };
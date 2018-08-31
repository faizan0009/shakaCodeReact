import * as actionTypes from '../../constants/actionTypes';


const initialState = {
  isLoggingIn: false,
  isSigningUp: false,
  isLogingOut: false,
  user: {},
  loginError: null,
  signupError: null,
  logoutError: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_LOGIN_STARTED:
      return {
        ...state,
        isLoggingIn: true,
      };
    case actionTypes.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLoggingIn: false,
      };
    case actionTypes.AUTH_LOGIN_ERROR:
      return {
        ...state,
        isLoggingIn: false,
        loginError: action.error.message,
      };
      case actionTypes.AUTH_SIGNUP_STARTED:
      return {
        ...state,
        isSigningUp: true,
      };
    case actionTypes.AUTH_SIGNUP_SUCCESS:
      return {
        ...state,
        isSigningUp: false,
        user: action.user,
      };
      case actionTypes.SET_CURRENT_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

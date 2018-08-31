import { connect } from 'react-redux';
import Signin from './SignIn';
import { userLogin } from '../../core/modules/Authentication';

const mapStateToProps = state => ({
  loginError: state.authentication.loginError,
});

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(userLogin(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);

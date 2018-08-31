import { connect } from 'react-redux';
import Signup from './Signup';

import { signup } from '../../core/modules/Authentication';

const mapStateToProps = state => ({
  signupError: state.authentication.signupError,
});

const mapDispatchToProps = dispatch => ({
  signup: (email, password, userType) => dispatch(signup(email, password, userType)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);

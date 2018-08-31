import { connect } from 'react-redux';
import Header from './Header';
import { logout } from '../../core/modules/Authentication';

const mapStateToProps = state => ({
  user: state.authentication.user,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

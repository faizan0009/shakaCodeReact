import { connect } from 'react-redux';
import LeftSideBar from './LeftSideBar';
import { logout } from '../../core/modules/Authentication';

const mapStateToProps = state => ({
  user: state.authentication.user,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftSideBar);

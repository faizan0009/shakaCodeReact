import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ViewData from './ViewData';

const mapStateToProps = (state) => {
  const currentUser = state.authentication.user;

  return {
    currentUser,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewData);

import Header from './Header.jsx';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})
export default connect(mapStateToProps)(Header);

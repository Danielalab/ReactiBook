import { connect } from 'react-redux';
import { navigateHome } from '../actions/actions';
import Header from '../components/header';

const mapDispatchToProps = (dispatch) => ({
  navigateHome : (actualPage) => {
    dispatch(navigateHome(actualPage))  
  },
})

export default connect(null, mapDispatchToProps)(Header);
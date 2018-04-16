import { connect } from 'react-redux';
import { navigateTo, signOut } from '../actions/actions';
import App from '../components/App';
import { firebaseApp }from '../firebase'

const mapStateToProps = (state) => ({
  actualPage: state.AppReducer.actualPage,
  user: state.AppReducer.user
})

const mapDispatchToProps = (dispatch) => ({
  navigateTo : (actualPage) => {
    dispatch(navigateTo(actualPage))
  },
  signOut: () => {
    firebaseApp.auth().signOut();
    dispatch(signOut())    
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
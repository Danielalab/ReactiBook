import { connect } from 'react-redux';
import { signIn } from '../actions/actions';
import { firebaseApp } from '../firebase';
import SignIn from '../components/SignIn';

const mapStateToProps = (state) => ({
  error: state.AppReducer.error
})

const mapDispatchToProps = (dispatch) => ({
  userSignIn : (email, password) => {
    let errorSignIn = '';
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        console.log(error)
        dispatch(signIn(email, error.message))
      })
    dispatch(signIn(email, errorSignIn))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
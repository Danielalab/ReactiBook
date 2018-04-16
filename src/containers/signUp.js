import { connect } from 'react-redux';
import { signUp, navigateTo } from '../actions/actions';
import SignUp from '../components/SignUp';
import { firebaseApp } from '../firebase';

const mapStateToProps = (state) => ({
  error: state.AppReducer.error
})

const mapDispatchToProps = (dispatch) => ({
  userSignUp : (email, password) => {
    console.log(email, password);  
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => {
        console.log(error)
        dispatch(signUp(error.message))   
        navigateTo('signUp')             
      })
    navigateTo('home')
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
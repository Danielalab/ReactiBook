import { connect } from 'react-redux';
import { updatePost } from '../actions/actions'
import Post from '../components/Post';
import { firebaseDataBase } from '../firebase'

const mapStateToProps = (state) => ({
  postEditId: state.AppReducer.postEditId,
})

const mapDispatchToProps = (dispatch) => ({
  updatePost : (obj) => {
  firebaseDataBase.ref('users/' + obj.uid + '/posts/' + obj.refPrivate).set(obj);
  firebaseDataBase.ref('postsPublic/' + obj.refPublic).set(obj);  
    dispatch(updatePost()) 
  }
})


export default connect(mapStateToProps , mapDispatchToProps)(Post);
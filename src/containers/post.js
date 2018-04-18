import { connect } from 'react-redux';
import { updatePost, deletePost } from '../actions/actions'
import Post from '../components/Post';
import { firebaseDataBase } from '../firebase'

const mapStateToProps = (state) => ({
  postEditId: state.AppReducer.postEditId,
})

const mapDispatchToProps = (dispatch) => ({
  updatePost : (obj) => {
    let updatePrivate = {}
    updatePrivate['users/' + obj.uid + '/posts/' + obj.refPrivate] = obj;
    firebaseDataBase.ref().update(updatePrivate);
    if (obj.refPublic) {
      let updatePublic = {};
      updatePublic['postsPublic/' + obj.refPublic] = obj;
      firebaseDataBase.ref().update(updatePublic);     
    }
    dispatch(updatePost()) 
  },
  deletePost : (refs) => {
    let updatePrivate = {}
    updatePrivate['users/' + refs.uid + '/posts/' + refs.refPrivate] = null;
    firebaseDataBase.ref().update(updatePrivate);
    if (refs.refPublic) {
      let updatePublic = {};
      updatePublic['postsPublic/' + refs.refPublic] = null;
      firebaseDataBase.ref().update(updatePublic);     
    }
    dispatch(deletePost()) 
  }
})


export default connect(mapStateToProps , mapDispatchToProps)(Post);
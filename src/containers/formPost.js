import { connect } from 'react-redux';
import { addPost } from '../actions/actions';
import { firebaseDataBase } from '../firebase'
import FormPost from '../components/formPost';

const mapDispatchToProps = (dispatch) => ({
  addPost : (uid, objPost, category) => {
    objPost.uid = uid
    objPost.refPrivate = firebaseDataBase.ref().child('users/' + uid + '/posts/').push().key;
    objPost.refPublic = firebaseDataBase.ref().child('postsPublic/').push().key
    if (category === 'public') {
      firebaseDataBase.ref('postsPublic/').push(objPost)
    }
    firebaseDataBase.ref('users/' + uid + '/posts/').push(objPost)
    dispatch(addPost())
  },
})

export default connect( null, mapDispatchToProps)(FormPost);
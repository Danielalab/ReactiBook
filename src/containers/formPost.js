import { connect } from 'react-redux';
import { addPost } from '../actions/actions';
import { firebaseDataBase } from '../firebase'
import FormPost from '../components/formPost';

const mapDispatchToProps = (dispatch) => ({
  addPost : (uid, objPost, category) => {
    objPost.uid = uid;
    let newPostRef = firebaseDataBase.ref('users/' + uid + '/posts/').push();
    objPost.refPrivate = newPostRef.key
    newPostRef.set(objPost);
    if (category === 'public') {
      let newPostPublicRef = firebaseDataBase.ref('postsPublic/').push();
      objPost.refPublic = newPostPublicRef.key
      newPostPublicRef.set(objPost);
    } 
    dispatch(addPost())
  },
})

export default connect( null, mapDispatchToProps)(FormPost);
import { connect } from 'react-redux';
import { getAllUserPosts, getPublicPosts, editPost } from '../actions/actions';
import { firebaseDataBase } from '../firebase';
import Home from '../components/Home';

const mapStateToProps = (state) => ({
  allUserPosts: state.AppReducer.allUserPosts,
  allPublicPosts: state.AppReducer.allPublicPosts,
  edit: state.AppReducer.edit,
})

const mapDispatchToProps = (dispatch) => ({
  getAllUserPosts : (uid) => {
    firebaseDataBase.ref('users/' + uid + '/posts/').on('value', snap => {
      let posts = [];
      snap.forEach(post => {
        const { key } = post;
        posts.push({key, ... post.val()})
      })
      dispatch(getAllUserPosts(posts))      
    })
  },
  getPublicPosts : () => {
    firebaseDataBase.ref('postsPublic/').on('value', snap => {
      let posts = [];
      snap.forEach(post => {
        const { key } = post;
        posts.push({key, ... post.val()})
      })
      dispatch(getPublicPosts(posts))      
    })
  },
  editUserPost : (key) => {
    dispatch(editPost(key)) 
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
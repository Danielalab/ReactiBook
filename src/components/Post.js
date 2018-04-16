import React from 'react';
import { firebaseDataBase } from '../firebase'
let newText = '';

const Post = ({text, img, email, edit, editUserPost, id, uid, user, postEditId, updatePost, refPublic, refPrivate}) => {
  let isPostOfUser = user.uid === uid;
  let isPostId = postEditId === id;
  return(
    <div className="col-12">
      <div className="card bg-light mb-3">
        <div className="card-header"><i className="fas fa-user-circle"></i> {emailY
        }</div>
        <div className="card-body">
          { isPostId && edit  ? <form>
            <div className="form-group row">
              <div className="col">
                <textarea  className="form-control" 
                  /* value={text ? text : ''}  */
                  onChange={(event)=> newText = event.target.value}
                ></textarea>
              </div>
            </div>
            <div className="form-group row">
              <div className="col">
                <button type="submit" className="btn btn-success"
                  onClick={(event) => {
                    event.preventDefault();  
                    let obj = {
                      email: email,
                      uid: user.uid,
                      text: newText, 
                      refPublic:  refPublic, 
                      refPrivate:  refPrivate
                    };
                    if (img) {
                      obj.img = img
                    } 
                    updatePost(obj);
                    let newPostPublic = firebaseDataBase.ref().child('postsPublic/').push().key;
                    let newPostPrivate = firebaseDataBase.ref().child('users/' + uid + '/posts/').push().key;
                    firebaseDataBase.ref('users/' + uid + '/posts/' + newPostPrivate).remove();
                    firebaseDataBase.ref('postsPublic/' + newPostPublic).remove();  
                  }}
                >Save</button> 
              </div>
            </div>
          </form> : <p> {text ? text : ''} </p>}
          { img ? <figure><img src={img} className="img-fluid"/></figure> : null }
        </div>
        <div className="card-footer bg-transparent">
          <div className="row">
          { isPostOfUser ?  <div className="col" onClick={() => editUserPost(id)}>{ isPostOfUser ?  <button type="submit" className="btn btn-info"><i className="fas fa-cog"></i> Edit Post</button> : ''}</div>: null} 
          <div className="col"><button type="submit" className="btn btn-info"><i className="far fa-comment"></i>  Comment</button></div>
          <div className="col"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post;
import React from 'react';
import { firebaseDataBase } from '../firebase'
let newText = '';

const Post = ({
  text, img, email, edit, editUserPost, 
  id, uid, user, postEditId, updatePost, 
  deletePost, refPublic, refPrivate }) => {
  let isPostOfUser = user.uid === uid;
  let isPostId = postEditId === id;
  return(
    <div className="col-12">
      <div className="card bg-light mb-3">
        <div className="card-header"><i className="fas fa-user-circle"></i> {email}</div>
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
                      refPrivate:  refPrivate
                    };
                    if (img) {
                      obj.img = img
                    } 
                    if (refPublic) {
                      obj.refPublic = refPublic 
                    } 
                    updatePost(obj); 
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
          <div className="col-4"><button type="submit" className="btn btn-info"><i className="far fa-comment"></i>  Comment</button></div>
          { isPostOfUser ?  <div className="col-4">
              <button type="submit" className="btn btn-info"
                onClick = {(event)=>{
                  event.preventDefault();
                  let refs = { 
                    refPrivate: refPrivate,
                    uid: uid 
                  }
                  if (refPublic) 
                    refs.refPublic = refPublic
                  deletePost(refs)
                }}
              ><i className="far fa-trash-alt"></i> Delete</button></div>
                : null}           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post;
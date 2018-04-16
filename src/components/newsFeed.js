import React from 'react';
import FormPost from '../containers/formPost'

const NewsFeed = ({publicPosts, user})  => (
  <div className="col-md-6 col-11 py-3">
    <div className="container-fluid">
      <div className="row">
        <FormPost uid={user.uid} email={user.email}/>
      </div>
      <div className="row">
        {publicPosts ? publicPosts : 'cargando...'}
      </div>
    </div> 
  </div>
)

export default NewsFeed;
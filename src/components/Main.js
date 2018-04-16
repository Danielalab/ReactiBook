import React from 'react';
import NewsFeed from './newsFeed';
import User from './User';

const Main = ({ posts, publicPosts, navigation, user }) => {
  switch (navigation) {
    case 'newsFeed':
      return <NewsFeed publicPosts={publicPosts} user={user}/>
    case 'user':
      return <User posts={posts}/>
    default:
      return null
  }
}

export default Main
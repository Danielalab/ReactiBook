import React, {Component} from 'react';
import FormPost from '../containers/formPost';
import Post from '../containers/post';
import Header from '../containers/header'
import Main from '../containers/main'

class Home extends Component {

  componentWillMount() {
    this.props.getAllUserPosts(this.props.user.uid);
    this.props.getPublicPosts();
  }

  render() {
    const { user, signOut, allUserPosts, navigateTo, allPublicPosts, editUserPost, edit } = this.props;
    let posts;
    let publicPosts;
    if (allUserPosts) {
      posts = allUserPosts.map( post => (
        <Post key={post.key} img={post.img} text={post.text} 
          id={post.key} uid={post.uid} email={post.email} editUserPost={editUserPost} 
          refPublic={post.refPublic} refPrivate={post.refPrivate}
          edit={edit} user={user} 
        />
      )).reverse()
    }
    if (allPublicPosts) {
      publicPosts = allPublicPosts.map( post => { 
        return <Post user={user} key={post.key} img={post.img} 
        text={post.text} id={post.key} uid={post.uid} email={post.email}
        refPublic={post.refPublic} refPrivate={post.refPrivate}
        editUserPost={editUserPost} edit={edit}/>
      }).reverse()
    }
    return (
      <div className="container-fluid">
        <Header signOut={signOut} />
        <div className="row justify-content-center">
          <Main posts={posts} publicPosts={publicPosts} user={user}/>
        </div>
      </div>
    )
  };
}

export default Home;

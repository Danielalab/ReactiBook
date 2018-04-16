import React from 'react';
import './App.css';
import SignIn from '../containers/signIn';
import SignUp from '../containers/signUp';
import Home from '../containers/home'

const App = ({actualPage, user, navigateTo, signOut}) => {
  switch (actualPage) {
    case 'signIn':
      return <SignIn navigateTo={navigateTo}/>
    case 'signUp':
      return <SignUp navigateTo={navigateTo}/>
    case 'home':
      return <Home navigateTo={navigateTo} user={user} signOut={signOut} />
    default:
      break;
  }
}

export default App;

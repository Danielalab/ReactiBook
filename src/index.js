import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { firebaseApp, firebaseDataBase } from './firebase';
import { Provider } from 'react-redux';
import App from './containers/app';
import store from './store';
import { navigateTo, saveUser } from './actions/actions';

firebaseApp.auth().onAuthStateChanged( user => {
  if (user) {
    console.log('user has signed in or up');
    firebaseDataBase.ref('users/'+ user.uid + '/userInfo').set({
      email: user.email,
    });
    store.dispatch(saveUser(user.email, user.uid));
    store.dispatch(navigateTo('home'))
  } else {
    console.log('user has signed out or still needs to sign in');
    store.dispatch(navigateTo('signIn'))    
  }
})

ReactDOM.render(
    <Provider store={store}>
      <App />      
    </Provider>,
  document.getElementById('root')
);
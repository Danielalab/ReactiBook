export const actionTypes = {
  SIGN_UP : 'SIGN_UP',
  SIGN_IN : 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT',
  SAVE_USER: 'SAVE_USER',
  ADD_POST: 'ADD_POST',
  EDIT_POST: 'EDIT_POST',
  UPDATE_POST: 'UPDATE_POST',
  GET_ALL_USER_POSTS: 'GET_ALL_USER_POSTS',
  GET_PUBLIC_POSTS: 'GET_PUBLIC_POSTS',
  NAVIGATE_TO: 'NAVIGATE_TO',
  NAVIGATE_HOME: 'NAVIGATE_HOME'  
}

export const signIn = (email, error) => ({
  type: actionTypes.SIGN_IN,
  email,
  error
})

export const signUp = (error) => ({
  type: actionTypes.SIGN_UP,
  error,
})

export const signOut = () => ({
  type: actionTypes.SIGN_OUT
})

export const saveUser = (email, uid) => ({
  type: actionTypes.SAVE_USER,
  email,
  uid
}) 

export const addPost = () => ({
  type: actionTypes.ADD_POST
})

export const editPost = (id) => ({
  type: actionTypes.EDIT_POST,
  id,
})

export const updatePost = () => ({
  type: actionTypes.UPDATE_POST,
})

export const getAllUserPosts = (posts) => ({
  type: actionTypes.GET_ALL_USER_POSTS,
  posts
})

export const getPublicPosts = (posts) => ({
  type: actionTypes.GET_PUBLIC_POSTS,
  posts
})

export const navigateTo = (actualPage) => ({
  type: actionTypes.NAVIGATE_TO,
  actualPage,
})

export const navigateHome = (actualPage) => ({
  type: actionTypes.NAVIGATE_HOME,
  actualPage,
})
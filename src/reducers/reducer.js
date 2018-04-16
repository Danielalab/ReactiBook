import { actionTypes } from '../actions/actions'

const INITIAL_STATE = {
  user: {},
  error: '',
  actualPage: 'signIn',
  navigation: 'newsFeed',
  allUserPosts: [],
  allPublicPosts:[],
  urlImg: '',
  edit: false,
  postEditId: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SIGN_UP:
      state = {
        ...state,
        error: action.error
      }
      return state;
    case actionTypes.SIGN_IN:
      state = {
        ...state,
        error: action.error
      }
      break;
    case actionTypes.NAVIGATE_TO:
      state = {
        ...state,
        actualPage: action.actualPage
      }
      break; 
    case actionTypes.NAVIGATE_HOME:
      state = {
        ...state,
        navigation: action.actualPage
      }
      break; 
    case actionTypes.SAVE_USER:
      state = {
        ...state,
        user: {
          email: action.email,
          uid: action.uid
        },
      }  
      break;   
    case actionTypes.GET_ALL_USER_POSTS:
      state = {
        ...state,
        allUserPosts: action.posts
      }  
      break; 
    case actionTypes.GET_PUBLIC_POSTS:
      state = {
        ...state,
        allPublicPosts: action.posts
      }  
      break;    
    case actionTypes.EDIT_POST:
      state = {
        ...state,
        edit : true,
        postEditId: action.id
      }  
      break;  
    case actionTypes.UPDATE_POST:
      state = {
        ...state,
        edit : false
      }  
      break;   
    default:
    return state;
  }
  return state;
}
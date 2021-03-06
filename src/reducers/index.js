/*
    Default file for reducers import.
    If a folder is imported, without specifying any file, the index.js is the default one
*/

import { combineReducers } from 'redux';
// import of al needed reducers
import PostsReducers from './posts';

const rootReducer = combineReducers({
    posts: PostsReducers
  });

// rootReducer is the default export for reducers
export default rootReducer;

import formVisibleReducer from "./form-visible-reducer";
import postListReducer from "./post-list-reducer"
import commentListReducer from "./comment-list-reducer"
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  mainPostList: postListReducer,
  mainCommentList: commentListReducer
})

export default rootReducer
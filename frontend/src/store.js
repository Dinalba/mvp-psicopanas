import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userDiaryReducer,
  userLoginReducer,
  userNoSecurityReducer,
  userRegisterReducer,
  userSecurityReducer,
  userSetTagsReducer,
  userUpdateReducer,
} from "./reducers/userReducers";
import {
  entryCreateReducer,
  entryListReducer,
  entryUpdateReducer,
  // lastEntryReducer,
  getStatsReducer,
} from "./reducers/entryReducers";
import { tagListReducer } from "./reducers/tagReducers";
import { emotionListReducer } from "./reducers/emotionReducers";
const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  entryList: entryListReducer,
  entryCreate: entryCreateReducer,
  entryUpdate: entryUpdateReducer,
  tagList: tagListReducer,
  emotionList: emotionListReducer,
  // lastEntry: lastEntryReducer,
  userUpdate: userUpdateReducer,
  userSecurity: userSecurityReducer,
  userNoSecurity: userNoSecurityReducer,
  userSetTags: userSetTagsReducer,
  stats: getStatsReducer,
  diaryAuth: userDiaryReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

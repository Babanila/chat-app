import { combineReducers } from "redux";
import user from "./userReducer";
import contacts from "./contactReducer";
import activeUserId from "./activeUserIdReducer";
import messages from "./messages";
import typing from "./typing";

const allReducer = combineReducers({
  user,
  messages,
  typing,
  contacts,
  activeUserId
});

export default allReducer;

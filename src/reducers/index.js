import { combineReducers } from "redux"
import user from "./userReducer"
import contacts from "./contactReducer"
import activeUserId from "./activeUserIdReducer"

const allReducer = combineReducers({ user, contacts, activeUserId })

export default allReducer

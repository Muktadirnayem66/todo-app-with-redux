import { combineReducers } from "redux"
import todoReducer from "./todos/actionReducer"
import filterReducer from "./filters/actionReducer"


const rootReducer = combineReducers({
    todos:todoReducer,
    filters:filterReducer
})

export default rootReducer
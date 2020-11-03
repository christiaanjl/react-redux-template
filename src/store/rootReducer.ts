import {combineReducers} from 'redux'
import RootStore from "../models/Store";
import UsersReducer from "./users/UsersReducer";
import UsersPageReducer from "./ui/users-page/UsersPageReducer";
import TodosReducer from "./todos/TodosReducer";

export default combineReducers<RootStore>({
    users: UsersReducer,
    todos: TodosReducer,
    ui: combineReducers({
        usersPage: UsersPageReducer
    })
});

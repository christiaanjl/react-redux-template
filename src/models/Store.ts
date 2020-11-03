import UsersState from "../store/users/models/UsersState";
import UsersPageState from "../store/ui/users-page/models/UsersPageState";
import TodosState from "../store/todos/models/TodosState";

export default interface Store {
    users: UsersState
    todos: TodosState
    ui: {
        usersPage: UsersPageState
    }
}

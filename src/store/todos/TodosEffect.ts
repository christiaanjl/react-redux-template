import EffectUtility from "../../utilities/EffectUtility";
import {fetchTodos} from '../../api/remoteApi'
import Todo from "../../models/Todo";

export default class TodosEffect {
    public static readonly FETCH_TODOS = "TodosEffect.FETCH_TODOS";
    public static readonly FETCH_TODOS_SUCCESS = "TodosEffect.FETCH_TODOS_SUCCESS";
    public static readonly FETCH_TODOS_FAILED = "TodosEffect.FETCH_TODOS_FAILED";

    public static getTodos(id: number) {
        return EffectUtility.createEffect<Todo[]>(TodosEffect.FETCH_TODOS, () => fetchTodos(id));
    }
}

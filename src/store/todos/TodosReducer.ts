import Action from "../../models/Action";
import Status from "../../constants/Status";
import TodosState from "./models/TodosState";
import Todo from "../../models/Todo";
import TodosEffect from "./TodosEffect";
import TodosAction from "./TodosAction";
import {keyBy, merge} from 'lodash';

const INITIAL_STATE = {
    data: {},
    status: Status.INIT
};

export default (state = INITIAL_STATE, action: Action<any>): TodosState => {
    switch(action.type) {
        case TodosEffect.FETCH_TODOS:
            return {...INITIAL_STATE, status: Status.BUSY};
        case TodosEffect.FETCH_TODOS_SUCCESS:
            return {...state, status: Status.SUCCESS, data: keyBy(action.payload as Todo[], 'id')};
        case TodosEffect.FETCH_TODOS_FAILED:
            return {...state, status: Status.FAILED};
        case TodosAction.IS_COMPLETED:
            return merge({}, state, {
                data: {
                    [action.payload.id]: {completed: action.payload.completed}
                }
            });
        default:
            return state;
    }
};

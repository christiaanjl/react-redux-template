import ActionUtility from "../../utilities/ActionUtility";

export default class TodosAction {
    public static readonly IS_COMPLETED = "TodosAction.IS_COMPLETED";

    public static setCompleted(id: number, completed: boolean) {
        return ActionUtility.createAction(TodosAction.IS_COMPLETED, {id, completed}) as IsTodoCompletedAction;
    }
}

interface IsTodoCompletedAction {
    type: typeof TodosAction.IS_COMPLETED,
    payload: {
        id: number
        completed: boolean
    }
}

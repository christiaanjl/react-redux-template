import ActionUtility from "../../../utilities/ActionUtility";

export default class UsersPageAction {
    public static readonly SELECTED_USER = "UsersPageAction.SELECTED_USER";

    public static selectUser(id: number) {
        return ActionUtility.createAction(UsersPageAction.SELECTED_USER, id);
    }
}

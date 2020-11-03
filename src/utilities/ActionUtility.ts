import Action from "../models/Action";

export default class ActionUtility {
    public static createAction<T>(type: string, payload?: T): Action<T> {
        return {
            type,
            payload
        }
    }
}

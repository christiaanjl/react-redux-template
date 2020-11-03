import UsersPageState from "./models/UsersPageState";
import Action from "../../../models/Action";
import UsersPageAction from "./UsersPageAction";

const INITIAL_STATE = {
};

export default (state = INITIAL_STATE, action: Action<any>): UsersPageState => {
    switch(action.type) {
        case UsersPageAction.SELECTED_USER:
            return {...state, selectedUser: action.payload};
        default:
            return state;
    }
};

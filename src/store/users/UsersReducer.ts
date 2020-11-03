import Action from "../../models/Action";
import UsersState from "./models/UsersState";
import Status from "../../constants/Status";
import UsersEffect from "./UsersEffect";
import User from "../../models/User";
import {keyBy} from 'lodash'

const INITIAL_STATE = {
    data: {},
    status: Status.INIT
};

export default (state = INITIAL_STATE, action: Action<any>): UsersState => {
    switch(action.type) {
        case UsersEffect.FETCH_USERS:
            return {...INITIAL_STATE, status: Status.BUSY};
        case UsersEffect.FETCH_USERS_SUCCESS:
            return {...state, status: Status.SUCCESS, data: keyBy(action.payload as User[], 'id')};
        case UsersEffect.FETCH_USERS_FAILED:
            return {...state, status: Status.FAILED};
        default:
            return state;
    }
};

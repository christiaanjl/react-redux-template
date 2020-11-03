import EffectUtility from "../../utilities/EffectUtility";
import {fetchUsers} from '../../api/remoteApi'
import User from "../../models/User";


export default class UsersEffect {
    public static readonly FETCH_USERS = "UsersEffect.FETCH_USERS";
    public static readonly FETCH_USERS_SUCCESS = "UsersEffect.FETCH_USERS_SUCCESS";
    public static readonly FETCH_USERS_FAILED = "UsersEffect.FETCH_USERS_FAILED";

    public static getUsers() {
        return EffectUtility.createEffect<User[]>(UsersEffect.FETCH_USERS, fetchUsers);
    }
}

import Status from "../../../constants/Status";
import User from "../../../models/User";
import {Dictionary} from "@reduxjs/toolkit";

export default interface UsersState {
    data: Dictionary<User>
    status: Status
}

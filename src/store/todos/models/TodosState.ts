import Status from "../../../constants/Status";
import Todo from "../../../models/Todo";
import {Dictionary} from "@reduxjs/toolkit";

export default interface TodosState {
    data: Dictionary<Todo>
    status: Status
}

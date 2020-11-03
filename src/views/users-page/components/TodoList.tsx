import React from "react";
import Paper from "@material-ui/core/Paper";
import TodoCard from "./TodoCard";
import Todo from "../../../models/Todo";
import Store from "../../../models/Store";
import {connect} from "react-redux";
import {values} from "lodash";
import Status from "../../../constants/Status";
import Header from "../../components/Header";
import {makeStyles} from "@material-ui/core/styles";
import ProgressSpinner from "../../components/ProgressSpinner";

type IProps = {
    todos: Todo[]
    status: Status
}

const TodoList: React.FunctionComponent<IProps> = ({todos, status}) => {
    const classes = useStyles();

    if(status === Status.BUSY) {
        return <ProgressSpinner />
    } else if (status === Status.SUCCESS) {
        return <Paper elevation={3} className={classes.root}>
                    <Header title="To do" />
                    {
                        todos.map(todo => {
                            return (
                                <TodoCard todo={todo} key={todo.id}/>
                            );
                        })
                    }
                </Paper>
    } else {
        return <div />
    }
};

const useStyles = makeStyles({
    root: {
        maxHeight: 800,
        width: 300,
        overflow: 'auto'
    }
});

const mapStateToProps = (state: Store) => {
    return {
        todos: values(state.todos.data),
        status: state.todos.status
    };
};

export default connect(mapStateToProps)(TodoList);

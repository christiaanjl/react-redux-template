import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Todo from "../../../models/Todo";
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import IconButton from '@material-ui/core/IconButton';
import {connect} from "react-redux";
import TodosAction from "../../../store/todos/TodosAction";

interface IProps {
    todo: Todo
    dispatch: any
}

const TodoCard: React.FunctionComponent<IProps> = (props) => {
    const classes = useStyles();
    const {todo: {id, completed}} = props;

    return (
        <div className={classes.root}>
            <IconButton onClick={() => props.dispatch(TodosAction.setCompleted(id, !completed))} disableRipple className={classes.button}>
                { props.todo.completed ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon /> }
            </IconButton>
            {
                <div style={{padding: 5}} >
                    { props.todo.title }
                </div>
            }
        </div>
    );
};

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center'
    },
    button: {
        "&:hover": {
            backgroundColor: "transparent"
        }
    }
});

export default connect()(TodoCard);

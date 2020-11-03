import React, {useEffect} from 'react';
import {connect} from "react-redux";
import UsersEffect from "../../store/users/UsersEffect";
import {Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import UsersList from "./components/UsersList";
import TodoList from "./components/TodoList";

interface IProps {
    dispatch: any
}

const UsersPage: React.FunctionComponent<IProps> = (props) => {
    const classes = useStyles();

    useEffect(() => {
        props.dispatch(UsersEffect.getUsers())
        // eslint-disable-next-line
    }, []);

    return (
        <Container fixed className={classes.root}>
            <UsersList />
            <TodoList />
        </Container>
    );
};


const useStyles = makeStyles({
    root: {
        display: 'flex'
    },
});


export default connect()(UsersPage);

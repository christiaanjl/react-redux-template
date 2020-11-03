import React from 'react';
import User from "../../../models/User";
import {makeStyles} from "@material-ui/core/styles";
import {Card} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {connect} from "react-redux";
import TodosEffect from "../../../store/todos/TodosEffect";
import UsersPageAction from "../../../store/ui/users-page/UsersPageAction";
import Store from "../../../models/Store";
import UsersPageState from "../../../store/ui/users-page/models/UsersPageState";

type IProps = UsersPageState & {
    user: User
    dispatch: any
}

const UserCard: React.FunctionComponent<IProps> = (props) => {
    const {
        user: {name, email, phone, website, id},
        dispatch
    } = props;

    const classes = useStyles();

    return (
        <Card variant="outlined"
              className={props.selectedUser === id ? classes.cardSelected : classes.card}
              onClick={() => {
                  dispatch(UsersPageAction.selectUser(id));
                  dispatch(TodosEffect.getTodos(id));
              }}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography className={classes.email} color="textSecondary">
                    {email}
                </Typography>
                <Typography variant="body2" component="p">
                    {phone}
                    <br />
                    {website}
                </Typography>
            </CardContent>
        </Card>
    );
};

const useStyles = makeStyles({
    card: {
        backgroundColor: '#f2f8ff'
    },
    cardSelected: {
        backgroundColor: '#9bd0ff'
    },
    email: {
        marginBottom: 12,
    },
});

const mapStateToProps = (state: Store) => {
    return {
        ...state.ui.usersPage
    }
};

export default connect(mapStateToProps)(UserCard);

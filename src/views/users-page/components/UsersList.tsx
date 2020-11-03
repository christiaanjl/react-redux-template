import React from "react";
import UserCard from "./UserCard";
import Paper from "@material-ui/core/Paper";
import User from "../../../models/User";
import Store from "../../../models/Store";
import {connect} from "react-redux";
import {values} from "lodash";
import {makeStyles} from "@material-ui/core/styles";

type IProps = {
    users: User[]
}

const UsersList: React.FunctionComponent<IProps> = ({users}) => {
    const classes = useStyles();
    return (
        <Paper elevation={3} className={classes.root}>
            {
                users.map(user => {
                    return (
                        <UserCard user={user} key={user.id}/>
                    );
                })
            }
        </Paper>
    );
};

const useStyles = makeStyles({
    root: {
        maxHeight: 800,
        width: 300,
        overflow: 'auto',
        scrollbarWidth: 'none',     // hide scroll bar - Firefox
        msOverflowStyle: 'none',    // hide scroll bar - IE, Edge
        '&::-webkit-scrollbar': {   // hide scroll bar - Chrome, Safari and Opera
            display: 'none'
        }
    },
});

const mapStateToProps = (state: Store) => {
    return {
        users: values(state.users.data)
    };
};

export default connect(mapStateToProps)(UsersList)

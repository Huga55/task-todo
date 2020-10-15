import React from "react";
import Sidebar from "./Sidebar";
import {connect} from "react-redux";
import {logoutUser} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

class SidebarContainer extends React.Component {
    render() {
        if(!this.props.auth) {
            return <Redirect to="login" />
        }
        return(
            <Sidebar {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        surname: state.auth.surname,
        name: state.auth.name,
        login: state.auth.login,
        userId: state.auth.userId,
        auth: state.auth.auth,
    }
}

export default connect(mapStateToProps, {logoutUser})(SidebarContainer);

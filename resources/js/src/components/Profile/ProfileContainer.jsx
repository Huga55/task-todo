import React from "react";
import {connect} from "react-redux";

class ProfileContainer extends React.Component {
    render() {
        return(
            <Profile {...state.props}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.auth.name,
        surname: state.auth.surname,
        patronymic: state.auth.patronymic,
        login: state.auth.login,
        position: state.auth.position,
        userId: state.auth.userId,
    }
}

export default connect(mapStateToProps, null)(ProfileContainer);

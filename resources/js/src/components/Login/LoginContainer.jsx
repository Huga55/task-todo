import React from "react";
import Login from "./Login";
import {loginUser} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class LoginContainer extends React.Component {
    render() {
        return(
            <Login {...this.props}/>
        );
    }
}



export default connect(null, {loginUser})(LoginContainer);

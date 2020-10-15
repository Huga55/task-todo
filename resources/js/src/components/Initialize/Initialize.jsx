import React from "react";
import {connect} from "react-redux";
import {checkUser} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import {initializeApp} from "../../redux/initialize-reducer";

class Initialize extends React.Component {
    componentDidMount() {
        this.props.checkUser();
        if(this.props.isAuth) {
            this.props.initializeApp();
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.isAuth !== this.props.isAuth && this.props.isAuth) {
            this.props.initializeApp();
        }
    }
    render() {
        if(this.props.isAuth && this.props.isReadyApp) {
            return <Redirect to="/app"/>
        }
        if(!this.props.isAuth && this.props.isAuth !== null) {
            return <Redirect to="/login"/>
        }
        return(
            <Preloader />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.auth,
        isReadyApp: state.initialize.isReadyApp,
    }
}

export default connect(mapStateToProps, {checkUser, initializeApp})(Initialize);
